import { IExperience, experienceList } from "@/common/data/resume";
import { Stack, Typography } from "@mui/material";

const ExperienceWrapper = (props: IExperience) => {
  const {
    position,
    company,
    type: title,
    start,
    end,
    duration,
    responsibilities,
  } = props;
  return (
    <Stack>
      <Typography fontWeight={700}>
        {position} ({title})
      </Typography>
      <Typography>{company}</Typography>
      <Typography>
        {start} - {end} ({duration})
      </Typography>
      <Typography width={"75ch"} variant="body2">
        {responsibilities}
      </Typography>
    </Stack>
  );
};

export const ResumeExperience = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="h5">Experience</Typography>
      {experienceList.map((exp: IExperience) => (
        <ExperienceWrapper key={exp.serial} {...exp} />
      ))}
    </Stack>
  );
};
