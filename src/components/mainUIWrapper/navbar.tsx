import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="[&>*]:navitem flex text-base border-black rounded-full border-1 overflow-hidden drop-shadow-lg shadow-black bg-stone-200 dark:bg-slate-700/50">
      <ul>
        <NavLink to="/">Home</NavLink>
      </ul>
      <ul>
        <NavLink to="/research">Research</NavLink>
      </ul>
      <ul>
        <NavLink to="/projects">projects</NavLink>
      </ul>
    </nav>
  );
};
