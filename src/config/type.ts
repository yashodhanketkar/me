export type Project = {
  _id: string;
  name: string;
  description: string;
  start: string;
  end: string;
  links: {
    name: string;
    url: string;
  }[];
  createdAt: string;
  updatedAt: string;
};

export type Research = {
  _id: string;
  title: string;
  description: string;
  abstract: string;
  authors: string[];
  date: string;
  doi: string;
  journal: string;
  createdAt: string;
  updatedAt: string;
};

export type Skill = {
  _id: string;
  name: string;
  level: string;
  createdAt: string;
  updatedAt: string;
};

export type Education = {
  _id: string;
  name: string;
  degree: string;
  end: string;
  grades: string;
  heading: string;
  createdAt: string;
  updatedAt: string;
};

export type Experience = {
  _id: string;
  position: string;
  name: string;
  type: "internship" | "permanent";
  start: string;
  end: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type Social = {
  _id: string;
  name: string;
  url: string;
  type: string;
  createdAt: string;
  updatedAt: string;
};
