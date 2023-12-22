import { Grid, Paper } from "@mui/material";
import { FooterInfo } from "./info";
import { FooterSocials } from "./social";

export const Footer = (): React.ReactElement => {
  return (
    <Paper
      sx={{
        displayPrint: "none",
      }}
    >
      <Grid spacing={1} padding={1} container>
        <Grid item xs={12} sm={6}>
          <FooterSocials />
        </Grid>
        <Grid item xs={12}>
          <FooterInfo />
        </Grid>
      </Grid>
    </Paper>
  );
};
