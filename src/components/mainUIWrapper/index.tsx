import { Footer } from "./footer";
import { Header } from "./header";

const MainUIWrapper = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  return (
    <div className="flex flex-col w-screen min-h-screen [&>*]:pl-2 [&>*]:pr-4">
      <Header />
      <main className="py-1 pl-2 pr-4 mb-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default MainUIWrapper;
