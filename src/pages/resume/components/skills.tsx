import { useGetSkillsQuery } from '@/context/services/resumeService';
import { Stack, Typography } from '@mui/material';
import { useMemo } from 'react';

type SkillMap = Record<string, string[]>;

export const ResumeSkills = () => {
  const { data, isError, isLoading } = useGetSkillsQuery();

  const skillGroups = useMemo(() => {
    if (!data) return [];

    const groups = data.reduce((acc, { category, name }) => {
      (acc[category] = acc[category] || []).push(name);
      return acc;
    }, {} as SkillMap);

    return Object.entries(groups);
  }, [data]);

  if (isLoading) return <Typography variant="h5">Loading...</Typography>;

  if (isError || !data) return <Typography variant="h5">Error</Typography>;

  return (
    <Stack spacing={2}>
      <Typography variant="h5">Skills</Typography>
      <Stack spacing={0.5}>
        {skillGroups.map(([category, skills]) => (
          <Typography key={category}>
            {category}: {skills.join(', ')}
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
};
