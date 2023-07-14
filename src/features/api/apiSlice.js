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
  tagTypes: ["User"],
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
      invalidatesTags: ["User"],
    }),
    getCurrentUser: builder.query({
      query: () => ({
        url: "/user/api/v1/current-user",
      }),
      providesTags: ["User"],
    }),
    getPosts: builder.query({
      query: () => ({
        url: "/post/api/v1/get-all-post",
      }),
    }),
    createJob: builder.mutation({
      query: (jobDetails) => ({
        url: "/post/api/v1/create-post",
        method: "POST",
        body: jobDetails,
      }),
    }),

    applyJob: builder.mutation({
      query: (id) => ({
        url: "/post/api/v1/update-post",
        method: "POST",
        body: id,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetCurrentUserQuery,
  useGetPostsQuery,
  useCreateJobMutation,
  useApplyJobMutation,
} = apiSlice;
