import type { Education } from '@/config/type';
import { useGetEducationsQuery } from '@/context/services/resumeService';
import { Stack, Typography } from '@mui/material';

const EducationWrapper = ({ name, degree, end, grades, heading, unviersity }: Education) => {
  return (
    <Stack>
      <Typography fontWeight={700}>{degree}</Typography>
      <Typography>{name}</Typography>
      <Typography>{unviersity}</Typography>
      <Typography>
        {end}
        {grades && ` - (${grades})`}
      </Typography>
      <Typography variant="body2">{heading}</Typography>
    </Stack>
  );
};

export const ResumeEducation = () => {
  const { data: educationList, isLoading, isError } = useGetEducationsQuery();

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError || !educationList) return <Typography>Error</Typography>;

  return (
    <Stack spacing={2}>
      <Typography variant="h5">Education</Typography>
      {educationList.map((edu) => (
        <EducationWrapper key={edu.id} {...edu} />
      ))}
    </Stack>
  );
};
