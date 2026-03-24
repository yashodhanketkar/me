import { Box, Grid, Link, Paper, Typography } from '@mui/material';
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { FaOrcid } from 'react-icons/fa';
import type { IconType } from 'react-icons/lib';

type Social = { link: string; Icon: IconType; app: boolean };
const socials: Social[] = [
  {
    link: 'mailto:kykyashodhan@gmail.com',
    Icon: AiOutlineMail,
    app: true,
  },
  {
    link: 'https://github.com/yashodhanketkar',
    Icon: AiFillGithub,
    app: false,
  },
  {
    link: 'https://orcid.org/0000-0003-1441-3247',
    Icon: FaOrcid,
    app: false,
  },
];

export const Footer = (): React.ReactElement => {
  return (
    <Paper sx={{ displayPrint: 'none' }}>
      <Grid spacing={1} padding={1} container>
        <Grid size={{ xs: 12, sm: 6 }}>
          <FooterSocials />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <FooterInfo />
        </Grid>
      </Grid>
    </Paper>
  );
};

const SocialFactory = ({ social }: { social: Social }): React.ReactElement => {
  const { link, app, Icon } = social;

  return (
    <Link
      href={link}
      sx={{
        color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black'),
        ':hover': { color: (theme) => (theme.palette.mode === 'dark' ? 'red' : 'inherit') },
      }}
      target={app ? '_top' : '_blank'}
      rel={'noreferer noppener nofollower'}
    >
      <Icon size={24} />
    </Link>
  );
};

export const FooterSocials = (): React.ReactElement => {
  return (
    <Box display={'inline-flex'} gap={1}>
      {socials.map((social) => (
        <SocialFactory key={social.link} social={social} />
      ))}
    </Box>
  );
};

const currentYear = new Date().getFullYear();

export const FooterInfo = (): React.ReactElement => {
  return (
    <Box sx={{ width: '100%', textAlign: 'center' }}>
      <Typography variant="caption">{currentYear} © Yashodhan Ketkar</Typography>
    </Box>
  );
};
