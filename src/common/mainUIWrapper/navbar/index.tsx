import { NavLink } from "react-router-dom";

interface INavbar {
  externalClassName?: string;
}

export const Navbar = (props: INavbar) => {
  return (
    <nav
      className={`[&>*]:navitem inline-flex overflow-hidden text-base border-black rounded-full border-1 drop-shadow-lg shadow-black bg-stone-200 dark:bg-slate-700/50 ${props.externalClassName}`}
    >
      <NavLink className="pl-2" to="/">
        Home
      </NavLink>
      <NavLink to="/research">Research</NavLink>
      <NavLink className="pr-2" to="/projects">
        Projects
      </NavLink>
    </nav>
  );
};
