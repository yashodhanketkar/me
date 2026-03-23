import { Box, Typography } from '@mui/material';

export const FooterInfo = (): React.ReactElement => {
  const currentYear = new Date(Date.now()).getFullYear();
  return (
    <Box sx={{ width: '100%', textAlign: 'center' }}>
      <Typography variant="caption">{currentYear} © Yashodhan Ketkar</Typography>
    </Box>
  );
};
