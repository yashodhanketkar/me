import { API } from '@/config/constants';
import type { Research } from '@/config/type';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const researchAPI = createApi({
  reducerPath: 'researchAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    getResearchs: builder.query<Research[], void>({
      query: () => '/publication',
    }),
    getResearch: builder.query<Research, string>({
      query: (id) => '/publication/' + id,
    }),
  }),
});

export const { useGetResearchsQuery, useGetResearchQuery } = researchAPI;
