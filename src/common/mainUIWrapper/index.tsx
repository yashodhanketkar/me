import { Box, Container, CssBaseline } from '@mui/material';

import { Footer } from './components/footer';
import { Header } from './components/header';
import { ThemeWrapper } from './theme';

const MainUIWrapper = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  return (
    <Container
      sx={{
        minHeight: '100vh',
      }}
      maxWidth={false}
      disableGutters
    >
      <ThemeWrapper>
        <CssBaseline />
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Header />
          <Box
            sx={{
              marginBottom: 'auto',
              position: 'relative',
              paddingY: { xs: 2, sm: 4, md: 6, lg: 8 },
            }}
          >
            {children}
          </Box>
          <Footer />
        </Box>
      </ThemeWrapper>
    </Container>
  );
};

export default MainUIWrapper;
