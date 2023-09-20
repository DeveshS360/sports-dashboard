import { SportData } from 'src/redux/slices/SportsSlice/types'
import {
  BASKETBALL_ADVERTISED_MATCH,
  FOOTBALL_ADVERTISED_MATCH,
} from './advertisedMatch'
import { BASKETBALL_FACT_OF_THE_DAY, FOOTBALL_FACT_OF_THE_DAY } from './fact'
import { BASKETBALL_LEAGUES, FOOTBALL_LEAGUES } from './league'
import { BASKETBALL_LIVE_MATCH, FOOTBALL_LIVE_MATCH } from './liveMatch'
import { FOOTBALL_NEWS_ARTICLES } from './news'

export const SPORTS_DATA: Record<string, SportData> = {
  football: {
    sportName: 'football',
    fact: FOOTBALL_FACT_OF_THE_DAY,
    leagues: FOOTBALL_LEAGUES,
    liveMatch: FOOTBALL_LIVE_MATCH,
    articles: FOOTBALL_NEWS_ARTICLES,
    advertisedMatch: FOOTBALL_ADVERTISED_MATCH,
  },

  basketball: {
    sportName: 'basketball',
    fact: BASKETBALL_FACT_OF_THE_DAY,
    advertisedMatch: BASKETBALL_ADVERTISED_MATCH,
    articles: FOOTBALL_NEWS_ARTICLES,
    liveMatch: BASKETBALL_LIVE_MATCH,
    leagues: BASKETBALL_LEAGUES,
  },

  volleyball: {
    sportName: 'basketball',
    fact: BASKETBALL_FACT_OF_THE_DAY,
    advertisedMatch: BASKETBALL_ADVERTISED_MATCH,
    articles: FOOTBALL_NEWS_ARTICLES,
    liveMatch: FOOTBALL_LIVE_MATCH,
    leagues: FOOTBALL_LEAGUES,
  },
}
