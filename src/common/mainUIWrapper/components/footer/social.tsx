import { Box, Link, PaletteMode, useTheme } from "@mui/material";
import { AiFillGithub, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { FaOrcid } from "react-icons/fa";
import { IconType } from "react-icons/lib";

type Social = { link: string; Icon: IconType; app: boolean };

const socials: Social[] = [
  {
    link: "mailto:kykyashodhan@gmail.com",
    Icon: AiOutlineMail,
    app: true,
  },
  {
    link: "https://github.com/yashodhanketkar",
    Icon: AiFillGithub,
    app: false,
  },
  {
    link: "https://orcid.org/0000-0003-1441-3247",
    Icon: FaOrcid,
    app: false,
  },
];

const SocialFactory = (props: {
  social: Social;
  mode: PaletteMode;
}): React.ReactElement => {
  const {
    social: { link, app, Icon },
    mode,
  } = props;

  return (
    <Link
      href={link}
      sx={{
        color: mode === "dark" ? "white" : "black",
        ":hover": { color: mode === "dark" ? "red" : "inherit" },
      }}
      target={app ? "_top" : "_blank"}
      rel={"noreferer noppener nofollower"}
    >
      <Icon size={24} />
    </Link>
  );
};

export const FooterSocials = (): React.ReactElement => {
  const {
    palette: { mode },
  } = useTheme();

  return (
    <Box display={"inline-flex"} gap={1}>
      {socials.map((social) => (
        <SocialFactory key={social.link} social={social} mode={mode} />
      ))}
    </Box>
  );
};
