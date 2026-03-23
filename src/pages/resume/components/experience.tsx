import type { Experience } from '@/config/type';
import { useGetExperiencesQuery } from '@/context/services/resumeService';
import { Stack, Typography } from '@mui/material';

const ExperienceWrapper = ({ company, description, end, name, start }: Experience) => {
  return (
    <Stack>
      <Typography textTransform={'capitalize'} fontWeight={700}>
        {name}
      </Typography>
      <Typography>{company}</Typography>
      <Typography>
        {start} - {end}
      </Typography>
      <Typography width={'75ch'} variant="body2">
        {description}
      </Typography>
    </Stack>
  );
};

export const ResumeExperience = () => {
  const { data: experienceList, isLoading, isError } = useGetExperiencesQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError || !experienceList) return <p>Error</p>;

  return (
    <Stack spacing={2}>
      <Typography variant="h5">Experience</Typography>
      {experienceList.map((exp) => (
        <ExperienceWrapper key={exp.id} {...exp} />
      ))}
    </Stack>
  );
};
