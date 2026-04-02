export type Education = {
  id: string;
  degree: string;
  unviersity: string;
  end: string;
  grades: string;
  heading: string;
};

export type Experience = {
  id: string;
  name: string;
  company: string;
  start: string;
  end: string;
  description: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  start: string;
  end: string;
  source: string;
  links: string[];
  featured: boolean;
};

export type Research = {
  id: string;
  name: string;
  description: string;
  abstract: string;
  authors: string[];
  date: string;
  doi: string;
  journal: string;
  featured: boolean;
};

export type Skill = {
  id: string;
  name: string;
  category: string;
};

export type Social = {
  id: string;
  name: string;
  url: string;
  type: string;
};
