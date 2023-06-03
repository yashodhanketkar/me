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
    degree: "Masters in IT Engineering",
    graduation: 2022,
    project: "Weightage based machine learning model selection system.",
    cgpa: 9.2,
  },
];

export interface ISkills {
  name: string;
  level?: string;
  years?: number;
}

export const skillList = [
  {
    name: "Python",
  },
];
