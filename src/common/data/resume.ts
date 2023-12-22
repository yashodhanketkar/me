export interface ISocials {
  type: string;
  url: string;
  username?: string;
}

export interface IExperience {
  serial: string;
  position: string;
  type?: "Job" | "Internship" | "Research";
  company: string;
  start?: string;
  end?: string;
  duration?: string;
  responsibilities: string;
}

export interface IEducation {
  university: string;
  degree: string;
  graduation: number;
  project: string;
  cgpa?: number;
}

export interface ISkills {
  name: string;
  level?: 1 | 2 | 3;
  years?: number;
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
    type: "orcid",
    url: "https://orcid.org/0000-0003-1441-3247",
    username: "0000-0003-1441-3247",
  },
  {
    type: "website",
    url: "https://yashodhan-ketkar.web.app",
  },
];

export const experienceList: IExperience[] = [
  {
    serial: "001",
    position: "Masters Student and Researcher",
    type: "Research",
    company: "Pillais College Of Engineering",
    start: "Sep, 2020",
    end: "Sep, 2022",
    duration: "2 Years",
    responsibilities:
      "Researching about AIML topics and conducting experiments related to said topics. Writing papers on conducted research work.",
  },
  {
    serial: "002",
    position: "FullStack Zoho Developer",
    type: "Internship",
    company: "Business Scales",
    start: "Feb, 2023",
    end: "Mar, 2023",
    duration: "2 Months",
    responsibilities:
      "Building applications using Zoho framework and HTML reports.",
  },
  {
    serial: "003",
    position: "Fullstack Web Developer",
    type: "Internship",
    company: "BriahTech",
    start: "Jul, 2023",
    end: "Oct, 2023",
    duration: "3 Months",
    responsibilities:
      "Building fullstack applications using React.js, Express.js and other tools. Working with libraries such as MUI and tailwindcss.",
  },
];

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
