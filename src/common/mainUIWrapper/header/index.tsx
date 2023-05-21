import { Navbar } from "../navbar";
import { useTheme } from "../../hooks/useTheme";
import { CgDarkMode } from "react-icons/cg";
import { NavLink } from "react-router-dom";

export const Header = (): React.ReactElement => {
  const [handleTheme] = useTheme();
  return (
    <header className="flex flex-wrap items-center justify-between py-2 text-2xl font-semibold">
      <NavLink className="order-1 w-1/2 sm:w-auto" to="/">
        <span className="font-dancingScript">Yashodhan</span>
      </NavLink>
      <Navbar externalClassName="order-3 sm:order-2 mr-auto ml-auto" />
      <button
        className="inline-flex justify-end order-2 w-1/2 text-black sm:w-auto sm:order-3 dark:text-slate-200"
        onClick={handleTheme}
      >
        <CgDarkMode />
      </button>
    </header>
  );
};
