import { Card, Container, Divider, useTheme } from '@mui/material';

import { ResumeEducation } from './components/education';
import { ResumeExperience } from './components/experience';
import { ResumeHeader } from './components/header';
import { ResumeSkills } from './components/skills';
import { ResumeTitle } from './components/title';

const ResumePage = () => {
  const {
    palette: { mode },
  } = useTheme();

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
      disableGutters
    >
      <Card
        sx={{
          padding: {
            xs: 2,
            md: 4,
          },
          backgroundColor: mode === 'dark' ? 'inherit' : 'white',
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
        className="resume-card"
      >
        <ResumeTitle />
        <Divider />
        <ResumeHeader />
        <Divider />
        <ResumeExperience />
        <Divider />
        <ResumeEducation />
        <Divider />
        <ResumeSkills />
      </Card>
    </Container>
  );
};

export default ResumePage;
