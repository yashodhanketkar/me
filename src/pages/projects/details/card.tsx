import type { Project } from '@/config/type';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import { memo, useMemo } from 'react';

const LinkRenderer = memo(
  ({ mode, link, title }: { mode: string; link: string; title: string }) => {
    return (
      <Typography
        variant="caption"
        width="fit-content"
        component="a"
        color={mode === 'dark' ? 'red' : 'black'}
        href={link}
        target="_blank"
        rel="noopener norefere"
      >
        {title}
      </Typography>
    );
  },
);

export const ProjectDetails = ({ projectWork }: { projectWork: Project }) => {
  const {
    palette: { mode },
  } = useTheme();

  const start = useMemo(() => {
    return new Date(projectWork.start)?.getFullYear() || 'Unknown';
  }, [projectWork.start]);

  const end = useMemo(() => {
    return new Date(projectWork.end)?.getFullYear() || 'Ongoing';
  }, [projectWork.end]);

  const linkLists = useMemo(
    () =>
      projectWork.links?.map((link, i) => (
        <Box key={link} display="flex" flexDirection="column" justifyContent="center">
          <LinkRenderer mode={mode} link={link} title={`[${i + 1}] ${link}`} />
        </Box>
      )),
    [projectWork.links, mode],
  );

  return (
    <Stack
      sx={{
        width: { xs: '100%', md: '75%', lg: '60%' },
        borderRadius: { xs: 2, md: 3 },
        paddingX: { xs: 2 },
      }}
      marginX="auto"
      spacing={1}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: '1.5rem', md: '2rem', lg: '2.5rem' },
          fontWeight: 600,
          textTransform: 'capitalize',
          textAlign: 'center',
        }}
      >
        {projectWork.name}
      </Typography>
      <Typography textAlign="center" variant="subtitle1">
        {`(${start} - ${end})`}
      </Typography>
      <Typography paddingTop={2} variant="body1" sx={{ textAlign: { xs: 'justify', md: 'left' } }}>
        {projectWork.description}
      </Typography>
      <LinkRenderer mode={mode} link={projectWork.source} title="Source" />
      <Stack paddingTop={2} spacing={1}>
        <Typography variant="overline" fontWeight={600}>
          External links
        </Typography>
        {linkLists}
      </Stack>
    </Stack>
  );
};
