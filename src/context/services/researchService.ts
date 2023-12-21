import { API } from "@/config/constants";
import { Research } from "@/config/type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const researchAPI = createApi({
  reducerPath: "researchAPI",
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    getResearchs: builder.query<Research[], void>({
      query: () => "/research",
    }),
    getResearch: builder.query<Research, string>({
      query: (id) => "/research/" + id,
    }),
  }),
});

export const { useGetResearchsQuery, useGetResearchQuery } = researchAPI;
