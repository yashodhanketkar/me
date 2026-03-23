import { API } from '@/config/constants';
import type { Project } from '@/config/type';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const projectAPI = createApi({
  reducerPath: 'projectAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    getProjects: builder.query<Project[], void>({
      query: () => '/project',
    }),
    getProject: builder.query<Project, string>({
      query: (id) => `/project/${id}`,
    }),
  }),
});

export const { useGetProjectsQuery, useGetProjectQuery } = projectAPI;
