export interface IResearchWork {
  name: string;
  authors: string[];
  journal: string;
  year: number;
  doi: string;
  abstract: string;
}

export const researchWorks: IResearchWork[] = [
  {
    name: "Effectiveness of Robotic Process Automation for data mining using UiPath",
    authors: ["Yashodhan Ketkar", "Dr. Sushopti Gawade"],
    journal: "IEEE",
    year: 2021,
    doi: "10.1109/ICAIS50930.2021.9396024",
    abstract:
      "With recent trends of digitization, many corporations are focusing on automation to digitize their non digital information. Robotic process automation, or software robot technology is gaining a lot of attention from corporates for its capability of efficient automation and scalability. Software bots are faster, cheaper, and precise therefore can be utilized by these organizations easily. Software bots can process both structured and unstructured data, for modern and/or legacy systems irrespective of size of organization. There is a lot of research conducted on robotic process automation during recent years. This research proposes method to collect data more efficiently with very high accuracy. This proposed method utilizes the nature of RPA to collect data from source. This method will be beneficial to small scale organizations due to its very easy implementation and ease of exportation of data in required format.",
  },
  {
    name: "A decision support system for selecting the most suitable machine learning in healthcare using user parameters and requirements",
    authors: ["Yashodhan Ketkar", "Dr. Sushopti Gawade"],
    journal: "Healthcare Analytics",
    year: 2021,
    doi: "10.1016/j.health.2022.100117",
    abstract:
      "The application of machine learning in the medical field is still limited. The main reason behind the lack of use is the unavailability of an easy-to-use machine learning system that targets non-technical users. The objective of this paper is to propose an automated machine learning system to aid non-technical users. The proposed system provides the user with simple choices to provide suggestions to the system. The system uses the combination of the user's choices and performance evaluation to select the most suited model from available options. In this study, we employed the system on a Parkinson's disease dataset. The templates for support vector machine and random forest algorithms are provided to the system. Support vector machines and random forests were able to produce 80% and 75% accuracy, respectively. The system used performance parameters of the system and user choices to select the most suited models for each test case. The support vector machine was selected as the most suited model in three test cases, while random forest was selected as the most suited for one test case. The test cases also showed that the weighted time parameter impacted the results heavily.",
  },
  {
    name: "Detection of arrhythmia using weightage-based supervised learning system for COVID-19",
    authors: ["Yashodhan Ketkar", "Dr. Sushopti Gawade"],
    journal: "Intelligent Systems with Applications",
    year: 2021,
    doi: "10.1016/j.iswa.2022.200119",
    abstract:
      "COVID-19 disease has became a global pandemic in the last few years. This disease was highly contagious, and it quickly spread throughout several countries. Its infection can lead to severe implications for its victims, including cardiovascular issues. This complication develops in some people with a history of cardiovascular illness, whereas it emerges in others after COVID-19 infection. Cardiovascular problems are the primary cause of mortality in COVID-19 patients and are used to predict disease prognosis. Identifying arrhythmia from abnormalities in patient ECG signals is one approach to the detection of cardiovascular disorders. This is a laborious and time-consuming procedure that can be automated. The proposed method selects the most suitable model for this task. The selection is made through the weightage generated from the user’s requirements. The proposed method uses supervised learning to identify abnormalities in ECG waves. The models provided by the selection system during tests were able to meet user requirements. The models achieved up to 97% accuracy and 97% precision in predictive tasks.",
  },
];
