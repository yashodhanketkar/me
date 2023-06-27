import { ResumeTitle, ResumeHeader, ResumeEducation } from "./components";

export const ResumePage = () => {
  return (
    <div className="flex justify-center w-full mt-4 mb-4">
      <div className="flex flex-col w-5/12 gap-4 p-4 text-black bg-white rounded-lg ring-1 ring-black/10 [&>*]:border-b-2 [&>*]:border-black [&>*]:pb-4">
        <ResumeTitle />
        <ResumeHeader />
        <ResumeEducation />
        <div>skills</div>
      </div>
    </div>
  );
};
