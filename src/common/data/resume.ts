export interface ISocials {
  type: string;
  url: string;
  username?: string;
}

export const socialList: ISocials[] = [
  {
    type: "linkedin",
    url: "https://www.linkedin.com/in/yashodhanketkar/",
    username: "Yashodhan Ketkar",
  },
  {
    type: "github",
    url: "https://github.com/yashodhanketkar",
    username: "yashodhanketkar",
  },
  {
    type: "twitter",
    url: "https://twitter.com/yashodhanketkar",
    username: "@yashodhanketkar",
  },
  {
    type: "orcid",
    url: "https://orcid.org/0000-0003-1441-3247",
    username: "0000-0003-1441-3247",
  },
  {
    type: "website",
    url: "https://yashodhan-ketkar.web.app",
  },
];

export interface IEducation {
  university: string;
  degree: string;
  graduation: number;
  project: string;
  cgpa?: number;
}

export const educationList: IEducation[] = [
  {
    university: "University of Mumbai",
    degree: "Masters - IT Engineering",
    graduation: 2022,
    project: "Weightage based machine learning model selection system.",
    cgpa: 9.2,
  },
  {
    university: "University of Mumbai",
    degree: "Bachelors - Civil Engineering",
    graduation: 2017,
    project:
      "Design and analysis of overhead water tank for rural water supply scheme a case study.",
  },
];

export interface ISkills {
  name: string;
  level?: 1 | 2 | 3;
  years?: number;
}

export const skillList: ISkills[] = [
  {
    name: "Python",
    level: 3,
    years: 9,
  },
  {
    name: "Javascript",
    level: 3,
    years: 3,
  },
  {
    name: "Typescript",
    level: 3,
    years: 2,
  },
  {
    name: "Java",
    level: 2,
    years: 3,
  },
  {
    name: "C/C++",
    level: 2,
  },
];
