import { Avatar, Card, Container, Grid, Paper } from "@mui/material";
import ProfilePhoto from "@/assets/photo.jpg";
import { ProfileInfo } from "./profile";

export const HomePage = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: {
          xs: 2,
          sm: 6,
        },
      }}
    >
      <Card
        sx={{
          width: { xs: "75%", md: "50%" },
          borderRadius: {
            xs: 2,
            md: 4,
          },
        }}
        variant="elevation"
      >
        <Grid container>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              padding: 2,
              display: "flex",
              justifyContent: "center",
              order: { sx: 1, md: 2 },
            }}
          >
            <Avatar
              sx={{
                width: 128,
                height: 128,
              }}
              src={ProfilePhoto}
              alt="Yashodhan Ketkar"
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            sx={{ padding: 2, order: { sx: 2, md: 1 } }}
          >
            <ProfileInfo />
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};
