import Skeleton from "@mui/material/Skeleton";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

const SKELETON_COUNT = 5;

/**
 * Display a placeholder preview of Github UserList content before the data gets loaded.
 */
export default function UserListSkeleton() {
  return (
    <>
      {Array(SKELETON_COUNT)
        .fill(1)
        .map((_, index) => (
          <ListItemButton
            key={index}
            data-testid="user-list-item-skeleton"
            sx={{ minWidth: 350, m: 2 }}
          >
            <ListItemAvatar>
              <Skeleton
                animation="wave"
                variant="circular"
                width={40}
                height={40}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Skeleton
                  animation="wave"
                  height={20}
                  width="80%"
                  style={{ marginBottom: 6 }}
                />
              }
            />
          </ListItemButton>
        ))}
    </>
  );
}
