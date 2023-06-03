import ProfilePicture from "@/assets/photo.jpg";
import {
  FaTwitter,
  FaGithub,
  FaOrcid,
  FaLinkedin,
  FaLink,
} from "react-icons/fa";

export const ResumeHeader = () => {
  return (
    <div className="inline-flex pb-4 border-b-2 border-black">
      <div className="w-5/6">
        <ul className="flex flex-col gap-1">
          <li className="inline-flex items-center gap-1">
            <FaLink />
            <span>https://yashodhan-ketkar.web.app</span>
          </li>
          <li className="inline-flex items-center gap-1">
            <FaTwitter />
          </li>
          <li className="inline-flex items-center gap-1">
            <FaGithub />
          </li>
          <li className="inline-flex items-center gap-1">
            <FaGithub />
          </li>
          <li className="inline-flex items-center gap-1">
            <FaOrcid />
          </li>
          <li className="inline-flex items-center gap-1">
            <FaLinkedin />
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center w-1/6 overflow-hidden rounded-full aspect-square">
        <img src={ProfilePicture} alt="Profile Picture" />
      </div>
    </div>
  );
};
