import type { Project } from '@/config/type';
import { IconButton, Paper, Stack, Typography, useTheme } from '@mui/material';
import { FaGithub as GitHubIcon } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

export const ProjectCard = ({ projectWork }: { projectWork: Project }) => {
  const {
    palette: { mode },
  } = useTheme();

  return (
    <Paper
      sx={{
        width: { xs: '100%', md: '85%', lg: '75%', xl: '60%' },
        backgroundColor: mode === 'light' ? 'white' : 'inherit',
        borderRadius: { xs: 2, md: 3 },
      }}
    >
      <Stack
        sx={{
          padding: { xs: 2 },
          alignItems: 'center',
        }}
        spacing={1}
      >
        <Typography
          component={RouterLink}
          to={`${projectWork.id}`}
          variant="h4"
          sx={{
            fontFamily: 'serif',
            fontSize: 24,
            fontWeight: 600,
            textAlign: 'center',
          }}
        >
          {projectWork.name}
        </Typography>
        <Typography variant="subtitle1">
          {`(${new Date(projectWork.start)?.getFullYear() || 'Unknown'} - ${
            new Date(projectWork.end)?.getFullYear() || 'Present'
          })`}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: { xs: 'justify', md: 'left' },
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
          }}
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
              backgroundColor: mode === 'dark' ? 'red' : 'black',
              ':hover': {
                backgroundColor: mode === 'dark' ? '#bb0000' : '#444444',
              },
              zIndex: 100,
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
