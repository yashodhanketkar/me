import { IResearchWork } from "../../common";

export const ResearchCard = (props: IResearchWork) => {
  const { title, authors, journal, year, doi, abstract } = props;

  return (
    <div className="flex flex-col items-center w-full gap-1 p-4 text-center shadow-lg lg:shadow-none rounded-xl ring-1 lg:ring-0 ring-slate-600/10 dark:ring-stone-200/10 shadow-slate-600/25 dark:shadow-stone-400/10">
      <h1 className="font-serif text-2xl font-bold ">{title}</h1>
      <h2 className="inline-flex gap-1">
        {authors.map((author) => (
          <span>{author}.</span>
        ))}
      </h2>
      <h3>
        {journal}, {year}
      </h3>
      <a
        className="italic underline"
        href={`https://doi.org/${doi}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {doi}
      </a>
      <p className="overflow-hidden font-serif text-justify max-h-36 text-stone-600 dark:text-slate-400">
        {abstract}
      </p>
    </div>
  );
};
