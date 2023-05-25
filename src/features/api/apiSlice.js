// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define our single API slice object
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rich-gold-goldfish.cyclic.app",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${localStorage.getItem("accessToken")}`
      );
    },
  }),
  // tagTypes: ["skill"],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (user) => ({
        url: "/user/api/v1/register",
        method: "POST",
        body: user,
      }),
    }),
    login: builder.mutation({
      query: (user) => ({
        url: "/user/api/v1/login",
        method: "POST",
        body: user,
      }),
    }),
    getCurrentUser: builder.query({
      query: () => ({
        url: "/user/api/v1/current-user",
      }),
    }),
    getPosts: builder.query({
      query: () => ({
        url: "/post/api/v1/get-all-post",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetCurrentUserQuery,
  useGetPostsQuery,
} = apiSlice;
