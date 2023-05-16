import { Navbar } from "./navbar";
import { useTheme } from "../../hooks/useTheme";
import { CgDarkMode } from "react-icons/cg";
import { NavLink } from "react-router-dom";

export const Header = (): React.ReactElement => {
  const [handleTheme] = useTheme();
  return (
    <header className="flex items-center justify-between py-2 text-2xl font-semibold">
      <NavLink to="/">
        <span className="font-dancingScript">Yashodhan</span>
      </NavLink>
      <Navbar />
      <button className="text-black dark:text-slate-200" onClick={handleTheme}>
        <CgDarkMode />
      </button>
    </header>
  );
};
