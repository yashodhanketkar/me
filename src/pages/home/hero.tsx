import { Box, IconButton, Stack, Typography } from '@mui/material';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import type { IconType } from 'react-icons/lib';

type ProfileLinkType = {
  link: string;
  Icon: IconType;
  color: string;
  hovercolor: string;
};

const profileLinks: ProfileLinkType[] = [
  {
    link: 'https://github.com/yashodhanketkar',
    Icon: AiFillGithub,
    color: 'black',
    hovercolor: '#444444',
  },
  {
    link: 'https://www.linkedin.com/in/yashodhanketkar/',
    Icon: AiFillLinkedin,
    color: 'blue',
    hovercolor: '#0000bb',
  },
  {
    link: 'https://www.youtube.com/@yashodhanketkar',
    Icon: AiFillYoutube,
    color: 'red',
    hovercolor: '#bb0000',
  },
];

export const Hero = () => {
  return (
    <Box
      sx={{
        borderRadius: { xs: 2, md: 4 },
        marginTop: 24,
        marginBottom: { xs: 6, lg: 12 },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack gap={1}>
        <Typography
          fontSize={{ xs: 40, sm: 52, md: 60, lg: 72 }}
          fontWeight={500}
          textAlign={{ xs: 'left', lg: 'center' }}
        >
          Yashodhan Ketkar
        </Typography>
        <Typography fontFamily="Comfortaa" fontSize={{ xs: 20, md: 28 }} marginBottom={0.25}>
          {"Hello, I'm software developer and researcher."}
        </Typography>
        <Stack
          justifyContent={{ xs: 'inherit', md: 'center' }}
          alignItems="center"
          gap={2}
          direction="row"
        >
          {profileLinks.map((profileLink) => (
            <ProfileButton key={profileLink.link} {...profileLink} />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

const ProfileButton = ({ link, Icon, color, hovercolor }: ProfileLinkType) => {
  return (
    <IconButton
      sx={{
        color: (theme) => (theme.palette.mode === 'dark' ? 'black' : 'white'),
        backgroundColor: (theme) => (theme.palette.mode === 'light' ? color : 'white'),
        ':hover': {
          backgroundColor: (theme) => (theme.palette.mode === 'dark' ? 'red' : hovercolor),
          color: 'white',
        },
      }}
      href={link}
    >
      <Icon />
    </IconButton>
  );
};
