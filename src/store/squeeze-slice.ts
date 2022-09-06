import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { dropToken, saveToken } from '../services/token'
import { AppState } from '../types/app'
import { statistics, logIn, register } from './api-action'

const initialState: AppState = {
  user: '',
  hasNext: true,
  offset: 0,
  limit: 20,
  data: [],
  isDataLoading: false,
  sorting: {
    sort: '',
    parametr: ''
  },
}

const squeezerSlice = createSlice({
  name: 'squeezer',
  initialState,
  reducers: {
    offsetStart(state) {
      state.offset = state.offset = 0
    },
    offsetPlus(state) {
      state.offset = state.offset + state.limit
    },
    offsetMinus(state) {
      if (state.offset !== 0 && state.offset > 0) {
        state.offset = state.offset - state.limit
      }
    },
    dropData(state) {
      state.data = initialState.data
    },
    dropSorting(state) {
      state.sorting = initialState.sorting
    },
    setOffset(state, action) {
      state.offset = action.payload
    },
    logOut(state) {
      state.user = initialState.user
      state.offset = initialState.offset
      state.limit = initialState.limit
      state.data = initialState.data
      state.sorting = initialState.sorting
      dropToken()
    },
    setIsDataLoadingFalse(state) {
      state.isDataLoading = false
    },
    setSorting(state, action: PayloadAction<{ sort: string, parametr: string }>) {
      state.sorting = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logIn.fulfilled, (state, action) => {
        if (action.payload) {
          const { data, username } = action.payload
          state.user = username
          saveToken(data.access_token)
        }
      })
      .addCase(register.fulfilled, (state, action) => {
        if (action.payload) {
          const { data, username } = action.payload
        }
      })
      .addCase(statistics.fulfilled, (state, action) => {
        if (action.payload) {
          const { data } = action.payload
          if (data.length === state.limit + 1) {
            state.data = data.slice(0, state.limit)
            state.hasNext = true
          } else {
            state.data = data
            state.hasNext = false
          }
          state.isDataLoading = false
        }
      })
      .addCase(statistics.pending, (state) => {
        state.isDataLoading = true
      })
  }
})

export const {
  logOut,
  setIsDataLoadingFalse,
  setSorting,
  setOffset,
  dropSorting,
  dropData,
  offsetStart,
  offsetPlus,
  offsetMinus,
} = squeezerSlice.actions

export default squeezerSlice.reducer
