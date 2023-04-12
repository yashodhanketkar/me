export const Navbar = () => {
  return (
    <nav className="flex text-base items-center gap-2 pt-1 text-white bg-black [&>*]:navitem">
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
