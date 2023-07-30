import { Grid, Stack, Typography, useTheme } from "@mui/material";
import { skillList, ISkills } from "@/common/data/resume";
import CircleIcon from "@mui/icons-material/Circle";

const Level = ({ level }: { level: number }) => {
  const {
    palette: { mode },
  } = useTheme();
  let Status = "";
  switch (level) {
    case 1:
      Status = "Basic";
      break;
    case 2:
      Status = "Intermediate";
      break;
    case 3:
      Status = "Advance";
      break;
    default:
      break;
  }
  return (
    <Typography
      sx={{
        color: mode === "dark" ? "black" : "white",
        backgroundColor: mode === "dark" ? "white" : "black",
        textAlign: "center",
        fontSize: 12,
        borderRadius: 1,
      }}
    >
      {Status.substring(0, 3)}
    </Typography>
  );
};

export const ResumeSkills = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="h5">Skills</Typography>
      <Grid container>
        {skillList.map((skill: ISkills) => (
          <Grid key={skill.name} item xs={6}>
            <Grid container direction={"row"} alignItems={"center"}>
              <Grid
                item
                xs={12}
                sm={4}
                gap={0.5}
                display={"inline-flex"}
                alignItems={"center"}
              >
                <CircleIcon sx={{ width: 10, height: 10 }} />
                {skill.name}
              </Grid>
              <Grid item display={{ xs: "none", md: "block" }} md={3} lg={2}>
                {skill.years && ` ${skill.years} years`}
              </Grid>
              <Grid item display={{ xs: "none", md: "block" }} md={2} lg={1}>
                {skill.level && <Level level={skill.level} />}
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
