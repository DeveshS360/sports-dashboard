import { USER_INFO } from 'src/constants/data/user'
import { UserStore } from './types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: UserStore = {
  user: { ...USER_INFO },
  notifications: 4,
}

export const userSlice = createSlice({
  name: 'userStore',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload
    },
  },
})

export const { setUserData } = userSlice.actions

export const userReducer = userSlice.reducer
