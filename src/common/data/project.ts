export interface IProjectWork {
  name: string;
  year: string;
  description: string;
  url: string;
}

export const projectWorks: IProjectWork[] = [
  {
    name: "MPR",
    year: "2021",
    description:
      "In this project, I undertook the development of a machine learning system targeted towards the general population. The developed machine learning system provides a web-based, easy-to-use interface. After providing data to the system, it automatically trains five models using 85% of the provided data. The remaining 15% is used for validation and selection of the most suitable model. The system is built using the sklearn and Flask libraries and was tested with well-known medical datasets such as the MIT-BIH arrhythmia database. The system successfully produced models with accuracy ranging from 95% to 98%.",
    url: "https://github.com/yashodhanketkar/mpr",
  },
  {
    name: "Catfact",
    year: "2023",
    description:
      "In this project, I utilized an open-source API to retrieve and display facts about cats. The application is built using the React frontend library to generate a webpage. The page is deployed using GitHub static pages. The latest version of the application incorporates Tailwind CSS and Vite with React and TypeScript. Additionally, the application utilizes the react-cookies library to store and manage the dark mode status.",
    url: "https://github.com/yashodhanketkar/catfact",
  },
  {
    name: "Exam Panel",
    year: "2023",
    description:
      "This page emulates a web-based examination panel, built using Next.js. It allows users to make choices, such as answering or ignoring questions, which are stored as states. The side panel dynamically shows the current state of buttons based on the user's choices. Users can overwrite states as required. Additionally, a time counter on the side panel displays the remaining time for the examination.",
    url: "https://github.com/yashodhanketkar/exam-panel",
  },
];
