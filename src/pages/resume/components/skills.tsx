import { useGetSkillsQuery } from "@/context/services/resumeService";
import { Grid, Stack, Typography } from "@mui/material";

const ResumeSkillElement = ({
  skills,
  level,
}: {
  skills: string[];
  level: string;
}) => {
  if (skills.length === 0) return null;

  return (
    <Stack>
      <Typography variant="overline">{level}</Typography>
      <Grid container>
        {skills.map((skill, i) => (
          <Grid key={i} item xs={6}>
            <Typography variant="body2">• {skill}</Typography>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export const ResumeSkills = () => {
  const { data: skillLevelList, isError, isLoading } = useGetSkillsQuery();

  if (isLoading) return <Typography variant="h5">Loading...</Typography>;
  if (isError || !skillLevelList)
    return <Typography variant="h5">Error</Typography>;

  return (
    <Stack spacing={2}>
      <Typography variant="h5">Skills</Typography>
      {["expert", "intermediate", "beginner", "misc"].map((level) => (
        <ResumeSkillElement
          key={level}
          level={level}
          skills={skillLevelList
            .filter((ele) => ele.level === level)
            .map(({ name }) => name)}
        />
      ))}
    </Stack>
  );
};
