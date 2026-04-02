import { Stack, Typography } from '@mui/material';

import type { Education } from '@/config/type';
import { useGetEducationsQuery } from '@/context/services/resumeService';

const EducationWrapper = ({ degree, end, grades, heading, unviersity }: Education) => {
  return (
    <Stack>
      <Typography fontWeight={700}>{degree}</Typography>
      <Typography>{unviersity}</Typography>
      <Typography>
        {end}
        {grades && ` - (${grades})`}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          display: '-webkit-box',
          maxWidth: '65ch',
          webllapLineClamp: 3,
          textOverflow: 'ellipsis',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {heading}
      </Typography>
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
