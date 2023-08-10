import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";

const SKELETON_COUNT = 5;

/**
 * Display a placeholder preview of Github RepoList content before the data gets loaded.
 */
export default function RepoListSkeleton() {
  return (
    <>
      {Array(SKELETON_COUNT)
        .fill(1)
        .map((_, index) => (
          <Card
            key={index}
            data-testid="repo-list-item-skeleton"
            sx={{ minWidth: 350, m: 2 }}
          >
            <CardHeader
              avatar={
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={40}
                  height={40}
                />
              }
              title={
                <Skeleton
                  animation="wave"
                  height={10}
                  width="80%"
                  style={{ marginBottom: 6 }}
                />
              }
              subheader={<Skeleton animation="wave" height={10} width="40%" />}
            />
            <CardContent>
              <Skeleton
                animation="wave"
                height={10}
                style={{ marginBottom: 6 }}
              />
              <Skeleton animation="wave" height={10} width="80%" />
            </CardContent>
          </Card>
        ))}
    </>
  );
}
