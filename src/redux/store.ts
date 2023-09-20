import { configureStore } from '@reduxjs/toolkit'
import { sportsReducer } from './slices/SportsSlice'
import { userReducer } from './slices/UserSlice'
export const store = configureStore({
  reducer: {
    sportsStore: sportsReducer,
    userStore: userReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
