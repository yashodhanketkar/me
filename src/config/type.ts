export type Project = {
  id: string;
  name: string;
  description: string;
  start: string;
  end: string;
  source: string;
  featured: boolean;
  links: string[];
};

export type Research = {
  id: string;
  name: string;
  description: string;
  abstract: string;
  authors: string[];
  date: string;
  doi: string;
  featured: boolean;
  journal: string;
};

export type Skill = {
  id: string;
  name: string;
  category: string;
};

export type Education = {
  id: string;
  name: string;
  unviersity: string;
  degree: string;
  end: string;
  grades: string;
  heading: string;
};

export type Experience = {
  id: string;
  name: string;
  company: string;
  type: 'internship' | 'permanent';
  start: string;
  end: string;
  description: string;
};

export type Social = {
  id: string;
  name: string;
  url: string;
  type: string;
};
