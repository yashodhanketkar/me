import { Box, Typography } from "@mui/material";

export const FooterInfo = (): React.ReactElement => {
  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
      }}
    >
      <Typography variant="caption">2023 © Yashodhan Ketkar</Typography>
    </Box>
  );
};
