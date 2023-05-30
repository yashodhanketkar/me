import { Link } from "react-router-dom";
import ProfilePhoto from "@/assets/photo.jpg";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export const ProfileCard = () => {
  return (
    <div className="flex flex-col items-center w-9/12 gap-4 p-8 shadow-md lg:w-1/2 bg-slate-50/5 ring-1 lg:ring-0 rounded-xl lg:flex-row xl:w-1/3 ring-stone-500/10 md:w-1/2">
      <div className="flex items-center overflow-hidden justify-center order-1 w-4/12 min-w-[96px] xl:min-w-[128px] rounded-full lg:order-2 aspect-square dark:ring-2 ring-slate-300">
        <img src={ProfilePhoto} alt="profile-pic" />
      </div>
      <div className="flex flex-col order-2 w-full gap-4 text-center lg:text-left lg:w-8/12 lg:order-1">
        <span className="font-semibold font-comfortaa xl:text-2xl">
          Yashodhan Ketkar
        </span>
        <span className="text-sm font-comfortaa xl:text-lg">
          Hello, I'm software developer and researcher.
        </span>
        <div className="flex flex-col items-center justify-around w-full gap-2 lg:flex-row">
          <Link
            to="https://github.com/yashodhanketkar"
            target="blank"
            rel="noopener norefere"
            className="text-white bg-stone-800 hover:bg-stone-700 profile-links ring-0"
          >
            <AiFillGithub size={20} className="block md:hidden" />
            GitHub
          </Link>
          <Link
            to="https://www.linkedin.com/in/yashodhanketkar/"
            target="blank"
            rel="noopener norefere"
            className="text-white bg-blue-600 hover:bg-blue-500 profile-links ring-0"
          >
            <AiFillLinkedin size={20} className="block md:hidden" />
            <span>LinkedIn</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
