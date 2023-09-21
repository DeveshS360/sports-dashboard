import { configureStore } from '@reduxjs/toolkit'
import { sportsReducer } from './slices/SportsSlice'
import { userReducer } from './slices/UserSlice'
import { audienceGraphReducer } from './slices/AudienceGraphSlice'
export const store = configureStore({
  reducer: {
    sportsStore: sportsReducer,
    userStore: userReducer,
    audienceGraphStore: audienceGraphReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
