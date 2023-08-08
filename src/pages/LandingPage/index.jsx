import { useSelector } from "react-redux";
import { Grid, Container } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";

import UserSearchForm from "~/modules/landing/UserSearchForm";
import UserList from "~/modules/landing/UserList";
import RepoList from "~/modules/landing/RepoList";
import NoResultsFound from "~/components/NoResultsFound";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const users = useSelector((state) => state.users);
  const repos = useSelector((state) => state.repos);
  const { usernameQuery, error } = users;
  const { selectedUserId } = repos;

  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (selectedUserId) {
      setOpen(true);
    }
  }, [selectedUserId]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={8}>
          <UserSearchForm users={users} />
        </Grid>
        {Boolean(usernameQuery && !error) ? (
          <Grid container spacing={4} item xs={12}>
            <Grid item xs={12} md={4}>
              <UserList repos={repos} users={users} />
            </Grid>
            {isDesktop ? (
              <Grid item xs={12} md={8}>
                <RepoList repos={repos} users={users} />
              </Grid>
            ) : (
              <Dialog
                data-testid="repo-list-dialog"
                open={open}
                fullScreen
                onClose={handleClose}
              >
                <DialogContent sx={{ padding: 0 }} dividers>
                  <RepoList repos={repos} users={users} />
                </DialogContent>
                <DialogActions>
                  <Button fullWidth onClick={handleClose}>
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
            )}
          </Grid>
        ) : (
          <NoResultsFound />
        )}
      </Grid>
    </Container>
  );
}
