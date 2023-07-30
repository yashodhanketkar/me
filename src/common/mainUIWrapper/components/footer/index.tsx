import { Grid, Paper } from "@mui/material";
import { FooterSocials } from "./social";
import { FooterInfo } from "./info";

export const Footer = (): React.ReactElement => {
  return (
    <Paper>
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
