import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginProps } from "../../shared/login";
import { userApi } from "./userApi";

const BASE_URL = "";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/v1/auth`,
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<
      { access_token: string; status: string },
      LoginProps
    >({
      query(data) {
        return {
          url: "/login",
          method: "POST",
          body: data,
          credentials: "include",
          mode: "no-cors",
        };
      },
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(userApi.endpoints.getMe.initiate(null));
        } catch (error) {}
      },
    }),
    logoutUser: builder.mutation<void, void>({
      query() {
        return {
          url: "logout",
          credentials: "include",
        };
      },
    }),
  }),
});

export const { useLoginUserMutation, useLogoutUserMutation } = authApi;
