import { AdvertisedMatchProps } from 'src/components/AdvertisedMatch/types'
import { Article } from 'src/components/LatestArticles/types'
import { LeagueDetailsProps } from 'src/components/LeagueDetails/types'
import { LiveMatchProps } from 'src/components/LiveMatch/types'
import { TabsProps } from 'src/components/Tabs/types'

export interface SportsStore {
  activeSportData: SportData
  tabData: TabsProps
  sportsDetailsMap: Record<string, SportData>
  sports: string[]
}

export interface SportData {
  sportName?: string
  fact: string
  leagues: LeagueDetailsProps[]
  liveMatch: LiveMatchProps
  articles: Article[]
  advertisedMatch: AdvertisedMatchProps
}
