import { Stack, Typography } from "@mui/material";

export const ResumeTitle = () => {
  return (
    <Stack
      width={"100%"}
      display={"flex"}
      alignItems={"center"}
      spacing={{ xs: 0.1, md: 1 }}
    >
      <Typography
        noWrap
        variant="h4"
        sx={{
          fontSize: {
            xs: 24,
            md: 36,
          },
        }}
      >
        Yashodhan Ketkar
      </Typography>
      <Typography fontFamily="Comfortaa" variant="subtitle1" textAlign="center">
        Web developer and ML Researcher
      </Typography>
    </Stack>
  );
};
