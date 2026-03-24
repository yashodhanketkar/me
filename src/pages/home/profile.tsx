import { Button, Stack, Typography } from '@mui/material';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import type { IconType } from 'react-icons/lib';

type ProfileLinkType = {
  link: string;
  Icon: IconType;
  name: string;
  color: string;
  hovercolor: string;
};
const profileLinks: ProfileLinkType[] = [
  {
    link: 'https://github.com/yashodhanketkar',
    Icon: AiFillGithub,
    name: 'GitHub',
    color: 'black',
    hovercolor: '#444444',
  },
  {
    link: 'https://www.linkedin.com/in/yashodhanketkar/',
    Icon: AiFillLinkedin,
    name: 'Linkedin',
    color: 'blue',
    hovercolor: '#0000bb',
  },
];

const ProfileButton = ({
  link,
  Icon,
  name,
  color,
  hovercolor,
}: {
  link: string;
  Icon: IconType;
  name: string;
  color: string;
  hovercolor: string;
}) => {
  return (
    <Button
      href={link}
      variant="contained"
      startIcon={<Icon />}
      sx={{
        width: '50%',
        textTransform: 'none',
        backgroundColor: (theme) => (theme.palette.mode === 'light' ? color : 'white'),
        ':hover': {
          backgroundColor: (theme) => (theme.palette.mode === 'dark' ? 'red' : hovercolor),
          color: 'white',
        },
      }}
    >
      {name}
    </Button>
  );
};

export const ProfileInfo = () => {
  return (
    <Stack gap={2}>
      <Typography variant="h5" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
        Yashodhan Ketkar
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Comfortaa',
        }}
        variant="body1"
      >
        {"Hello, I'm software developer and researcher."}
      </Typography>
      <Stack
        justifyContent="center"
        alignItems="center"
        gap={2}
        direction={{ xs: 'column', md: 'row' }}
      >
        {profileLinks.map((profileLink) => (
          <ProfileButton key={profileLink.link} {...profileLink} />
        ))}
      </Stack>
    </Stack>
  );
};
