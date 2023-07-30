import { Stack, Typography } from "@mui/material";
import { educationList, IEducation } from "@/common/data/resume";

const EducationWrapper = (props: IEducation) => {
  const { university, degree, graduation: gradyear, cgpa, project } = props;
  return (
    <Stack>
      <Typography fontWeight={700}>{degree}</Typography>
      <Typography>{university}</Typography>
      <Typography>
        {gradyear}
        {cgpa && ` - (${cgpa})`}
      </Typography>
      <Typography variant="body2">{project}</Typography>
    </Stack>
  );
};

export const ResumeEducation = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="h5">Education</Typography>
      {educationList.map((edu: IEducation) => (
        <EducationWrapper key={edu.degree} {...edu} />
      ))}
    </Stack>
  );
};
