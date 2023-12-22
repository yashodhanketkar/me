import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { NavDrawer, Navbar } from "../navbar";
import { ThemeSwitch } from "./themeSwitch";

export const Header = (): React.ReactElement => {
  const {
    palette: { mode },
  } = useTheme();

  return (
    <Container maxWidth={false} disableGutters>
      <AppBar
        sx={{
          backgroundColor: "transparent",
          color: mode === "light" ? "black" : "white",
          boxShadow: "none",
          displayPrint: "none",
        }}
        position="static"
      >
        <Toolbar>
          <Typography
            sx={{
              fontWeight: 700,
              fontFamily: "Dancing Script",
              ":hover": { color: mode === "dark" ? "red" : "inherit" },
            }}
            variant="h5"
            component={"a"}
            href="/"
            noWrap
            className="font-dancingScript"
          >
            Yashodhan
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: {
                xs: "end",
                sm: "center",
              },
            }}
          >
            <Navbar />
            <NavDrawer />
          </Box>
          <ThemeSwitch />
        </Toolbar>
      </AppBar>
    </Container>
  );
};
