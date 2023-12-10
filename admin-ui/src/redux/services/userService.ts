import { IUserDataType } from "@/types/user";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "UserAPI",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    getAllUser: builder.query<
      {
        status: number;
        message: string;
        result: {
          data: IUserDataType[];
        };
      },
      void
    >({
      query: () => `user`,
    }),
    getUserById: builder.query({
      query: (id: number) => ({
        url: `${id}`,
      }),
    }),
    addNewUser: builder.mutation<IUserDataType, Partial<IUserDataType>>({
      query: (body: IUserDataType) => ({
        url: ``,
        body,
        method: "POST",
      }),
    }),
    deleteUserById: builder.mutation({
      query: (id: number) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
    updateUserById: builder.mutation({
      query: (id: number) => ({
        url: `/${id}`,
        method: "PATCH",
      }),
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useAddNewUserMutation,
  useDeleteUserByIdMutation,
  useGetUserByIdQuery,
  useUpdateUserByIdMutation,
} = userApi;
