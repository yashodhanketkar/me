import { AiOutlineTwitter, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaOrcid } from "react-icons/fa";

export const Footer = (): React.ReactElement => {
  return (
    <footer className="py-1 bg-black dark:bg-slate-950 text-stone-200">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="inline-flex gap-2">
            <a href="mailto:kykyashodhan@gmail.com">
              <AiOutlineMail size={24} />
            </a>
            <a
              href="https://twitter.com/yashodhanketkar"
              target={"_blank"}
              rel={"noreferer noppener nofollower"}
            >
              <AiOutlineTwitter size={24} />
            </a>
            <a
              href="https://github.com/yashodhanketkar"
              target={"_blank"}
              rel={"noreferer noppener nofollower"}
            >
              <AiFillGithub size={24} />
            </a>
            <a
              href="https://orcid.org/0000-0003-1441-3247"
              target={"_blank"}
              rel={"noreferer noppener nofollower"}
            >
              <FaOrcid size={24} />
            </a>
          </div>
        </div>
        <div className="inline-flex justify-end w-full">
          <span className="">2023 © Yashodhan Ketkar</span>
        </div>
      </div>
    </footer>
  );
};
