import { Avatar, Grid, Typography, useTheme } from "@mui/material";
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
  const {
    palette: { mode },
  } = useTheme();
  return (
    <Typography
      component="a"
      href={socialObject.url}
      target="_blank"
      rel="noreferer noopener"
      display="inline-flex"
      gap={1}
      sx={{
        ":hover": {
          color: mode === "dark" ? "red" : "inherit",
        },
      }}
    >
      {socialIcon(socialObject.type)}
      <Typography>
        {socialObject.username ? socialObject.username : socialObject.url}
      </Typography>
    </Typography>
  );
};

export const ResumeHeader = () => {
  return (
    <Grid spacing={2} container>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          order: { xs: 1, md: 2 },
        }}
      >
        <Avatar
          sx={{
            height: {
              xs: "7rem",
              md: "10rem",
            },
            width: {
              xs: "7rem",
              md: "10rem",
            },
          }}
          src={ProfilePicture}
          alt="yashodhanketkar"
        >
          Y
        </Avatar>
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          justifyContent: "center",
          order: { xs: 2, md: 1 },
        }}
      >
        {socialList.map((social: ISocials) => (
          <SocialLinkFactory key={social.url} socialObject={social} />
        ))}
      </Grid>
    </Grid>
  );
};
