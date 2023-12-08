import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const userApi = createApi({
  reducerPath: "UserAPI",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => `user`,
    }),
  }),
});
