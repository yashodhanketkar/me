import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex overflow-hidden text-base border-black rounded-full border-1 drop-shadow-lg shadow-black bg-stone-200 dark:bg-slate-700/50">
      <ul className="[&>*]:navitem inline-flex">
        <li>
          <NavLink className="pl-2" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/research">Research</NavLink>
        </li>
        <li>
          <NavLink className="pr-2" to="/projects">
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
