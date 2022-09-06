import store, { api } from "./store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppRoute } from "../const";
import { ErrorType } from "../types/error";
import { errorHandle } from "../services/error-handle";
import { successHandle } from "../services/success-handle";
import { NewSqueezedLink, SqueezeType } from "../types/app";
import { setIsDataLoadingFalse } from "./squeeze-slice";

export type LogInPropsType = {
  username: string
  password: string
}

export type LogInUserType = {
  access_token: string
  token_type: string
}

export type RegisterUserType = {
  username: string
}

export const logIn = createAsyncThunk(
  'app/UserLogin',
  async ({ username, password }: LogInPropsType) => {
    const bodyFormData = new FormData();
    bodyFormData.append('grant_type', '')
    bodyFormData.append('username', username)
    bodyFormData.append('password', password)
    bodyFormData.append('scope', '')
    bodyFormData.append('client_id', '')
    bodyFormData.append('client_secret', '')

    try {
      const { data } = await api.post<LogInUserType>(AppRoute.Login, bodyFormData, {
        headers: { 'accept': 'application/json', 'content-Type': 'application/x-www-form-urlencoded' },
      });
      return { data, username }
    } catch (error) {
      const err = error as ErrorType;
      errorHandle(err)
    }
  },
);

export const register = createAsyncThunk(
  'app/UserRegister',
  async ({ username, password }: LogInPropsType) => {
    try {
      const { data } = await api.post<RegisterUserType>(AppRoute.Register, null, {
        params: {
          username,
          password
        },
        headers: { 'accept': 'application/json', 'content-Type': 'application/x-www-form-urlencoded' },
      });
      successHandle(data)
      return { data, username }
    } catch (error) {
      const err = error as ErrorType;
      errorHandle(err)
    }
  },
);

export const squeeze = createAsyncThunk(
  'app/UrlSqueeze',
  async ({ full }: NewSqueezedLink) => {
    const bodyFormData = new FormData();
    bodyFormData.append('link', encodeURI(full))

    try {
      const { data } = await api.post<SqueezeType[]>(AppRoute.Squeeze, null, {
        params: {
          'link': encodeURI(full)
        },
        headers: { 'accept': 'application/json', 'content-Type': 'application/x-www-form-urlencoded' },
      });
      return { data }
    } catch (error) {
      const err = error as ErrorType;
      errorHandle(err)
    }
  },
);

export type GetStatisticsProps = {
  sorting: {
    sort: string,
    parametr: string
  },
  offset: number,
  limit: number,
}

export const statistics = createAsyncThunk(
  'app/Statistics',
  async ({ sorting, offset, limit }: GetStatisticsProps) => {
    const { sort, parametr } = sorting

    let queryString = `offset=${offset}&limit=${limit+1}`

    sort ? queryString += `&order=${sort}_${parametr}` : null

    try {
      const { data } = await api.get<SqueezeType[]>(AppRoute.Statistics + queryString,
        {
          headers: { 'accept': 'application/json' },
        });
      return { data }
    } catch (error) {
      const err = error as ErrorType;
      errorHandle(err)
      store.dispatch(setIsDataLoadingFalse())
    }
  },
)
