import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API } from '@/config/constants';
import type { Project } from '@/config/type';

export const projectAPI = createApi({
  reducerPath: 'projectAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    getProjects: builder.query<Project[], void>({
      query: () => '/api/project',
    }),
    getProject: builder.query<Project, string>({
      query: (id) => `/api/project/${id}`,
    }),
  }),
});

export const { useGetProjectsQuery, useGetProjectQuery } = projectAPI;
