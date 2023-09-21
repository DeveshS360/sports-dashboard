import { AUDIENCE_DATA } from 'src/constants/data/audienceGraph'
import { AudienceGraphStore } from './types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: AudienceGraphStore = {
  isOpen: false,
  audienceGraphData: AUDIENCE_DATA,
}

export const audienceGraphSlice = createSlice({
  name: 'audienceGraphStore',
  initialState,
  reducers: {
    setIsAudienceGraphOpen: (state, action) => {
      state.isOpen = action.payload
    },
  },
})

export const { setIsAudienceGraphOpen } = audienceGraphSlice.actions

export const audienceGraphReducer = audienceGraphSlice.reducer
