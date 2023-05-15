export const Navbar = () => {
  return (
    <nav className="[&>*]:navitem flex text-base border-black rounded-full border-1 overflow-hidden drop-shadow-lg shadow-black bg-stone-200 dark:bg-slate-700/50">
      <ul>
        <a href="#">Profile</a>
      </ul>
      <ul>
        <a href="#">Research</a>
      </ul>
      <ul>
        <a href="#">Projects</a>
      </ul>
    </nav>
  );
};
