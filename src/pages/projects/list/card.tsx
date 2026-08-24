import { IconButton, Paper, Stack, Typography } from '@mui/material';
import { DateTime } from 'luxon';
import { useMemo } from 'react';
import { FaGithub as GitHubIcon } from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';
import { Link as RouterLink } from 'react-router-dom';

import type { Project } from '@/config/type';

export const ProjectCard = ({ projectWork }: { projectWork: Project }) => {
  const start = useMemo(() => {
    const dt = DateTime.fromFormat(projectWork.start, 'dd/MM/yyyy');
    return dt.isValid ? dt.year : 'Unknown';
  }, [projectWork.start]);

  const end = useMemo(() => {
    const dt = DateTime.fromFormat(projectWork.end, 'dd/MM/yyyy');
    return dt.isValid ? dt.year : 'Ongoing';
  }, [projectWork.end]);

  return (
    <Paper
      sx={{
        width: '100%',
        backgroundColor: (theme) => (theme.palette.mode === 'light' ? 'white' : 'inherit'),
        borderRadius: { xs: 2, md: 3 },
      }}
    >
      <Stack
        sx={{
          padding: { xs: 2 },
          alignItems: 'right',
        }}
        spacing={1}
      >
        <div className="w-full flex justify-between items-center">
          <Typography
            component={RouterLink}
            to={`${projectWork.id}`}
            variant="h4"
            sx={{
              fontFamily: 'serif',
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            {projectWork.name}
          </Typography>
          {projectWork.featured && (
            <span className="ml-1 mr-auto">
              <CiStar fill="orange" size={24} />
            </span>
          )}
          <Typography variant="subtitle1">{`(${start} - ${end})`}</Typography>
        </div>

        <Typography
          variant="body1"
          sx={{
            textAlign: { xs: 'justify', md: 'left' },
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '1',
            WebkitBoxOrient: 'vertical',
          }}
          title={projectWork.description}
        >
          {projectWork.description}
        </Typography>

        {projectWork.source && (
          <IconButton
            component="a"
            href={projectWork.source}
            target="_blank"
            rel="noopener norefere"
            sx={{
              color: 'white',
              borderRadius: 5,
              backgroundColor: (theme) => (theme.palette.mode === 'dark' ? 'red' : 'black'),
              ':hover': {
                backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#bb0000' : '#444444'),
              },
              zIndex: 100,
              width: 'fit-content',
            }}
            title="Source"
          >
            <GitHubIcon />
          </IconButton>
        )}
      </Stack>
    </Paper>
  );
};
