import { educationList, IEducation } from "@/common/data/resume";

const EducationWrapper = (props: IEducation) => {
  const { university, graduation: gradyear, cgpa, project } = props;
  return (
    <div className="flex flex-col">
      <span className="font-bold">{university}</span>
      <span>
        {gradyear}
        {cgpa ? ` - (${cgpa})` : ""}
      </span>
      <span>{project}</span>
    </div>
  );
};

export const ResumeEducation = () => {
  return (
    <div className="flex flex-col gap-1">
      {educationList.map((edu: IEducation, i: number) => (
        <EducationWrapper key={i} {...edu} />
      ))}
    </div>
  );
};
