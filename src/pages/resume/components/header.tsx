import ProfilePicture from "@/assets/photo.jpg";
import {
  FaTwitter,
  FaGithub,
  FaOrcid,
  FaLinkedin,
  FaLink,
  FaGlobe,
} from "react-icons/fa";
import { socialList, ISocials } from "@/common/data/resume";

interface ISocialLinkFactory {
  socialObject: ISocials;
}

const socialIcon = (socialType: string) => {
  switch (socialType) {
    case "linkedin":
      return (
        <FaLinkedin size={24} className="text-[#0077B5] dark:text-inherit" />
      );
    case "twitter":
      return (
        <FaTwitter size={24} className="text-[#1DA1F2] dark:text-inherit" />
      );
    case "github":
      return (
        <FaGithub size={24} className="text-[#171515] dark:text-inherit" />
      );
    case "orcid":
      return <FaOrcid size={24} className="text-lime-400 dark:text-inherit" />;
    case "website":
      return <FaGlobe size={24} />;
    default:
      return <FaLink size={24} />;
  }
};

const SocialLinkFactory = (props: ISocialLinkFactory) => {
  const { socialObject } = props;
  return (
    <a
      href={socialObject.url}
      target="_blank"
      rel="noreferer noopener"
      className="inline-flex items-center gap-2 w-fit"
    >
      {socialIcon(socialObject.type)}
      <span>
        {socialObject.username ? socialObject.username : socialObject.url}
      </span>
    </a>
  );
};

export const ResumeHeader = () => {
  return (
    <div className="inline-flex">
      <div className="w-5/6">
        <ul className="flex flex-col gap-2">
          {socialList.map((social: ISocials, i: number) => (
            <SocialLinkFactory key={i} socialObject={social} />
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center w-1/6">
        <img
          src={ProfilePicture}
          alt="Profile Picture"
          className="rounded-full aspect-square"
        />
      </div>
    </div>
  );
};
