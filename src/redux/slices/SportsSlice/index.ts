import { MAIN_TABS } from 'src/constants/data/tabs'
import { SportsStore } from './types'
import { createSlice } from '@reduxjs/toolkit'
import { SPORTS_DATA } from 'src/constants/data/sports'

const initialState: SportsStore = {
  tabData: MAIN_TABS,
  sports: ['football', 'basketball', 'baseball'],
  activeSportData: SPORTS_DATA.football,
  sportsDetailsMap: {
    football: SPORTS_DATA.football,
    basketball: SPORTS_DATA.basketball,
    volleyball: SPORTS_DATA.volleyball,
  },
}

export const sportsSlice = createSlice({
  name: 'sportsStore',
  initialState,
  reducers: {
    setActiveSportsData: (state, action) => {
      state.activeSportData = action.payload
    },
    starOrUnstarLeagueMatch: (state, action) => {
      const { matchId, leagueId } = action.payload

      const leagueIdx = state.activeSportData.leagues.findIndex(
        (league) => league.leagueId === leagueId
      )

      if (leagueIdx == -1) return

      const matchIdx = state.activeSportData.leagues[
        leagueIdx
      ].matches.findIndex((match) => matchId === match.matchId)

      if (matchIdx === -1) return

      const starValue =
        state.activeSportData.leagues[leagueIdx].matches[matchIdx].isStarred
      state.activeSportData.leagues[leagueIdx].matches[matchIdx].isStarred =
        !starValue
    },
  },
})

export const { setActiveSportsData, starOrUnstarLeagueMatch } =
  sportsSlice.actions

export const sportsReducer = sportsSlice.reducer
