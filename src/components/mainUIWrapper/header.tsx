import { Navbar } from "./navbar";

export const Header = (): React.ReactElement => {
  return (
    <header className="flex items-center justify-between py-2 text-2xl text-white bg-black">
      <span>Yashodhan</span>
      <Navbar />
    </header>
  );
};
