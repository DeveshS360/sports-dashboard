import versusUrl from 'assets/images/versus.png'
import { AdvertisedMatchProps } from 'src/components/AdvertisedMatch/types'

export const FOOTBALL_ADVERTISED_MATCH: AdvertisedMatchProps = {
  team1: 'Manchester City',
  team2: 'Arsenal',
  date: '10 January, 2022',
  venue: 'Old Trafford Stadium',
  versusImgUrl: versusUrl,
}

export const BASKETBALL_ADVERTISED_MATCH: AdvertisedMatchProps = {
  team1: 'Boston Celtics',
  team2: 'Brooklyn Nets',
  date: '20 March, 2022',
  venue: 'Frankfurt Statdium',
  versusImgUrl: versusUrl,
}
