import { API } from '@/config/constants';
import type { Education, Experience, Skill, Social } from '@/config/type';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const resumeAPI = createApi({
  reducerPath: 'resumeAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    getSkills: builder.query<Skill[], void>({
      query: () => '/skill',
    }),
    getEducations: builder.query<Education[], void>({
      query: () => '/education',
    }),
    getExperiences: builder.query<Experience[], void>({
      query: () => '/experience',
    }),
    getSocials: builder.query<Social[], void>({
      query: () => '/social',
    }),
  }),
});

export const {
  useGetSkillsQuery,
  useGetEducationsQuery,
  useGetExperiencesQuery,
  useGetSocialsQuery,
} = resumeAPI;
