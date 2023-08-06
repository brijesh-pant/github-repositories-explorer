import PropTypes from "prop-types";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import Link from "@mui/material/Link";

const Stargazers = ({ count }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-evenly",
      minWidth: "40px",
      margin: "12px 2px",
    }}
  >
    <Typography variant="h5" component="p">
      {count}
    </Typography>
    <StarIcon color="warning" />
  </Box>
);

/**
 * Display the searched github user content
 */
export default function RepoListItem({
  avatarSrc,
  description,
  fullName,
  htmlUrl,
  name,
  stargazersCount,
}) {
  return (
    <Card component="li" data-testid="repo-list-item" sx={{ m: 2 }}>
      <CardHeader
        avatar={<Avatar alt={name} src={avatarSrc} />}
        action={<Stargazers count={stargazersCount} />}
        title={
          <Typography variant="h5" component="div">
            {name}
          </Typography>
        }
        subheader={
          <Typography variant="body2" color="text.secondary" component="p">
            {fullName}
          </Typography>
        }
      />
      <CardContent sx={{ padding: "0 16px" }}>
        <Typography variant="body2" color="text.secondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ paddingLeft: "16px", paddingTop: "4px" }}>
        <Link target="_blank" href={htmlUrl} underline="none">
          Check out the repository…
        </Link>
      </CardActions>
    </Card>
  );
}

RepoListItem.propTypes = {
  avatarSrc: PropTypes.string,
  name: PropTypes.string,
};
