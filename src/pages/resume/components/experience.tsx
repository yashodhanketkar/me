import { Experience } from "@/config/type";
import { useGetExperiencesQuery } from "@/context/services/resumeService";
import { Stack, Typography } from "@mui/material";

const ExperienceWrapper = ({
  position,
  name,
  type: title,
  start,
  end,
  description,
}: Experience) => {
  return (
    <Stack>
      <Typography textTransform={"capitalize"} fontWeight={700}>
        {position} ({title === "internship" && title})
      </Typography>
      <Typography>{name}</Typography>
      <Typography>
        {start} - {end}
      </Typography>
      <Typography width={"75ch"} variant="body2">
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
        <ExperienceWrapper key={exp._id} {...exp} />
      ))}
    </Stack>
  );
};
