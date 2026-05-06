import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API } from '@/config/constants';
import type { Research } from '@/config/type';

export const researchAPI = createApi({
  reducerPath: 'researchAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    getResearchs: builder.query<Research[], void>({
      query: () => '/api/publication',
    }),
    getResearch: builder.query<Research, string>({
      query: (id) => `/api/publication/${id}`,
    }),
  }),
});

export const { useGetResearchsQuery, useGetResearchQuery } = researchAPI;
