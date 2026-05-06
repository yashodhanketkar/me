import { Avatar, Grid, Typography } from '@mui/material';
import { FaGithub, FaGlobe, FaLink, FaLinkedin, FaOrcid } from 'react-icons/fa';

import ProfilePicture from '@/assets/photo.jpg';
import type { Social } from '@/config/type';

const socialList: Pick<Social, 'name' | 'type' | 'url'>[] = [
  {
    name: 'yashodhanketkar',
    type: 'github',
    url: 'https://github.com/yashodhanketkar',
  },
  {
    name: 'yashodhanketkar',
    type: 'linkedin',
    url: 'https://www.linkedin.com/in/yashodhanketkar/',
  },
  {
    name: '0000-0003-1441-3247',
    type: 'orcid',
    url: 'https://orcid.org/0000-0003-1441-3247',
  },
  {
    name: 'yashodhanketkar.com',
    type: 'home',
    url: 'https://yashodhan-ketkar.web.app',
  },
];

const socialIcon = (socialType: string) => {
  switch (socialType) {
    case 'linkedin':
      return <FaLinkedin size={24} className="text-[#0077B5] dark:text-inherit" />;
    case 'github':
      return <FaGithub size={24} className="text-[#171515] dark:text-inherit" />;
    case 'orcid':
      return <FaOrcid size={24} className="text-lime-400 dark:text-inherit" />;
    case 'home':
      return <FaGlobe size={24} />;
    default:
      return <FaLink size={24} />;
  }
};

const SocialLinkFactory = ({ name, type, url }: Pick<Social, 'name' | 'type' | 'url'>) => {
  return (
    <Typography
      component="a"
      href={url}
      target="_blank"
      rel="noreferer noopener"
      display="inline-flex"
      gap={1}
      sx={{
        ':hover': {
          color: (theme) => (theme.palette.mode === 'dark' ? 'red' : 'inherit'),
        },
      }}
    >
      {socialIcon(type)}
      <Typography>{name}</Typography>
    </Typography>
  );
};

export const ResumeHeader = () => {
  return (
    <Grid spacing={2} container>
      <Grid
        size={{ xs: 12, md: 4 }}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          order: { xs: 1, md: 2 },
        }}
      >
        <Avatar
          sx={{
            height: {
              xs: '7rem',
              md: '10rem',
            },
            width: {
              xs: '7rem',
              md: '10rem',
            },
          }}
          src={ProfilePicture}
          alt="yashodhanketkar"
        >
          Y
        </Avatar>
      </Grid>
      <Grid
        size={{ xs: 12, md: 8 }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          justifyContent: 'center',
          order: { xs: 2, md: 1 },
        }}
      >
        {socialList.map((social) => (
          <SocialLinkFactory key={social.url} {...social} />
        ))}
      </Grid>
    </Grid>
  );
};
