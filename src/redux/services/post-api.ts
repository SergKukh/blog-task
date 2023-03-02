import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost, IPostDetails, CreatePostPayload, UpdatePostPayload, CreateCommentPayload } from '../../types/post.types';

const apiTags = {
  posts: 'posts',
  post: 'post',
}

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: [...Object.values(apiTags)],
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], void>({
      query: () => '/posts',
      providesTags: [apiTags.posts],
    }),
    getPost: builder.query<IPostDetails, number>({
      query: (id) => `/posts/${id}?_embed=comments`,
      providesTags: [apiTags.posts, apiTags.post],
    }),
    createPost: builder.mutation<IPost, CreatePostPayload>({
      query: (data) => ({
        url: '/posts',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [apiTags.posts],
    }),
    updatePost: builder.mutation<IPost, UpdatePostPayload>({
      query: ({ id, ...data }) => ({
        url: `/posts/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: [apiTags.posts, apiTags.post],
    }),
    deletePost: builder.mutation<void, number>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [apiTags.posts],
    }),
    createComment: builder.mutation<IPost, CreateCommentPayload>({
      query: (data) => ({
        url: '/comments',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [apiTags.post],
    }),
  }),
});

export const { 
  useGetPostsQuery, 
  useGetPostQuery, 
  useCreatePostMutation, 
  useUpdatePostMutation, 
  useDeletePostMutation, 
  useCreateCommentMutation 
} = postsApi;
