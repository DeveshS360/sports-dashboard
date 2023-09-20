import { MAIN_TABS } from 'src/constants/data/tabs'
import { SportsStore } from './types'
import { FACT_OF_THE_DAY } from 'src/constants/data/fact'
import { LEAGUES } from 'src/constants/data/league'
import { LIVE_MATCH } from 'src/constants/data/liveMatch'
import { NEWS_ARTICLES } from 'src/constants/data/news'
import { createSlice } from '@reduxjs/toolkit'
import { ADVERTISED_MATCH } from 'src/constants/data/advertisedMatch'

const initialState: SportsStore = {
  tabData: MAIN_TABS,
  sports: ['football', 'basketball', 'baseball'],
  activeSportData: {
    sportName: 'football',
    fact: FACT_OF_THE_DAY,
    leagues: LEAGUES,
    liveMatch: LIVE_MATCH,
    articles: NEWS_ARTICLES,
    advertisedMatch: ADVERTISED_MATCH,
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
