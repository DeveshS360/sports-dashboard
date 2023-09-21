import { USER_INFO } from 'src/constants/data/user'
import { UserStore } from './types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: UserStore = {
  userStoreData: {
    user: { ...USER_INFO },
    notifications: 4,
  },
}

export const userSlice = createSlice({
  name: 'userStore',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userStoreData.user = action.payload
    },
    setNotifications: (state, action) => {
      state.userStoreData.notifications = action.payload
    },
    setUserStoreData: (state, action) => {
      state.userStoreData = action.payload
    },
  },
})

export const { setUserData, setNotifications, setUserStoreData } =
  userSlice.actions

export const userReducer = userSlice.reducer
