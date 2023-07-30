import { Footer, Header } from "./components";
import { Box, Container, CssBaseline, Stack } from "@mui/material";
import { ThemeWrapper } from "./theme";

const MainUIWrapper = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  return (
    <Container
      sx={{
        minHeight: "100vh",
      }}
      maxWidth={false}
      disableGutters
    >
      <ThemeWrapper>
        <CssBaseline />
        <Stack minHeight={"100vh"} spacing={2} justifyContent="space-between">
          <Header />
          <Box sx={{ marginBottom: "auto" }}>{children}</Box>
          <Footer />
        </Stack>
      </ThemeWrapper>
    </Container>
  );
};

export default MainUIWrapper;
