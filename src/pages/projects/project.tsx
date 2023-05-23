import { IProjectWork } from "@/common/data/project";

interface IProjectCard {
  projectWork: IProjectWork;
}

export const ProjectCard = (props: IProjectCard) => {
  const { projectWork } = props;
  return (
    <div className="flex flex-col items-center w-full gap-1 p-4 text-center shadow-lg sm:w-11/12 lg:w-2/3 lg:shadow-none rounded-xl ring-1 lg:ring-0 ring-slate-600/10 dark:ring-stone-200/10 shadow-slate-600/25 dark:shadow-stone-400/10">
      <div className="flex-1">
        <h1 className="font-serif text-2xl font-semibold">
          {projectWork.name}
        </h1>
        <span>({projectWork.year})</span>
        <p>{projectWork.description}</p>
      </div>
      <a
        href={projectWork.url}
        target="_blank"
        rel="noopener norefere"
        className="px-4 py-2 my-2 font-semibold rounded-full bg-stone-800 text-stone-200 hover:bg-stone-600 dark:bg-slate-200 dark:text-slate-800 hover:dark:bg-slate-400"
      >
        Source Code
      </a>
    </div>
  );
};

// @apply bg-stone-200 text-stone-800 dark:bg-slate-800 dark:text-slate-200 overflow-x-hidden;
