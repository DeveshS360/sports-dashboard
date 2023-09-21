import { MAIN_TABS } from 'src/constants/data/tabs'
import { SportsStore } from './types'
import { createSlice } from '@reduxjs/toolkit'
import { SPORTS_DATA } from 'src/constants/data/sports'
import { setInStorage } from 'src/utils/persist'
import { STORAGE } from 'src/constants'

const initialState: SportsStore = {
  sportsStoreData: {
    tabData: MAIN_TABS,
    sports: ['football', 'basketball', 'baseball'],
    activeSportData: SPORTS_DATA.football,
    sportsDetailsMap: {
      football: SPORTS_DATA.football,
      basketball: SPORTS_DATA.basketball,
      volleyball: SPORTS_DATA.volleyball,
    },
  },
}

export const sportsSlice = createSlice({
  name: 'sportsStore',
  initialState,
  reducers: {
    setDefaultTab: (state, action) => {
      state.sportsStoreData.tabData.defaultActiveTabId = action.payload
    },
    setSportsStoreData: (state, action) => {
      state.sportsStoreData = action.payload
    },
    setActiveSportsData: (state, action) => {
      state.sportsStoreData.activeSportData = action.payload
      state.sportsStoreData.sportsDetailsMap[action.payload.sportName] =
        action.payload

      // after every redux update storing in browser session storage
      setInStorage(STORAGE.sportsStoreData, state.sportsStoreData)
    },
    starOrUnstarLeagueMatch: (state, action) => {
      const { matchId, leagueId } = action.payload

      const leagueIdx = state.sportsStoreData.activeSportData.leagues.findIndex(
        (league) => league.leagueId === leagueId
      )

      if (leagueIdx == -1) return

      const matchIdx = state.sportsStoreData.activeSportData.leagues[
        leagueIdx
      ].matches.findIndex((match) => matchId === match.matchId)

      if (matchIdx === -1) return

      const starValue =
        state.sportsStoreData.activeSportData.leagues[leagueIdx].matches[
          matchIdx
        ].isStarred
      state.sportsStoreData.activeSportData.leagues[leagueIdx].matches[
        matchIdx
      ].isStarred = !starValue

      state.sportsStoreData.sportsDetailsMap[
        state.sportsStoreData.activeSportData.sportName
      ] = {
        ...state.sportsStoreData.activeSportData,
      }

      setInStorage(STORAGE.sportsStoreData, state.sportsStoreData)
    },
  },
})

export const {
  setActiveSportsData,
  starOrUnstarLeagueMatch,
  setSportsStoreData,
  setDefaultTab,
} = sportsSlice.actions

export const sportsReducer = sportsSlice.reducer
