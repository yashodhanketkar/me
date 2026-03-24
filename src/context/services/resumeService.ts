import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API } from '@/config/constants';
import type { Education, Experience, Skill, Social } from '@/config/type';

export const resumeAPI = createApi({
  reducerPath: 'resumeAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    getSkills: builder.query<Skill[], void>({
      query: () => '/api/skill',
    }),
    getEducations: builder.query<Education[], void>({
      query: () => '/api/education',
    }),
    getExperiences: builder.query<Experience[], void>({
      query: () => '/api/experience',
    }),
    getSocials: builder.query<Social[], void>({
      query: () => '/api/social',
    }),
  }),
});

export const {
  useGetSkillsQuery,
  useGetEducationsQuery,
  useGetExperiencesQuery,
  useGetSocialsQuery,
} = resumeAPI;
