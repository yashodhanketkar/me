import { useContext } from "react";
import { ThemeModeContext } from "@/common/context/theme";
import { IconButton, useTheme } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export const ThemeSwitch = (): React.ReactElement => {
  const {
    palette: { mode },
  } = useTheme();
  const themeMode = useContext(ThemeModeContext);

  let handleThemeSwitch = () => {
    localStorage.setItem("theme", mode === "dark" ? "light" : "dark");
    themeMode.toggleThemeMode();
  };

  return (
    <IconButton onClick={handleThemeSwitch}>
      {mode === "dark" ? (
        <Brightness7Icon sx={{ ":hover": { color: "red" } }} />
      ) : (
        <Brightness4Icon sx={{ color: "black" }} />
      )}
    </IconButton>
  );
};
