import config from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://assignment-8-backend-nine.vercel.app/api",
  }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (query) => ({
        url: `/products?${query}`,
        method: "GET",
        query,
      }),
    }),
  }),
});

export const { useGetAllProductsQuery } = baseApi;
