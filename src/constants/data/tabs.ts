import laLigaUrl from 'assets/images/football-la-liga.jpg'
import { TabsProps } from 'src/components/Tabs/types'
import footballIUrl from 'assets/images/football.png'
import basketballUrl from 'assets/images/basketball.png'
import volleyballUrl from 'assets/images/volleyball.jpeg'
import premierLeagueUrl from 'assets/images/football-premier-league.jpeg'
import bundesLigaUrl from 'assets/images/bundesliga.png'
import lbaLeagueUrl from 'assets/images/basketball-lba.png'
import balLeagueUrl from 'assets/images/basketball-bal.jpeg'

export const MAIN_TABS: TabsProps = {
  defaultActiveTabId: 'football',
  tabs: [
    {
      id: 'football',
      title: 'Football',
      tabIcon: footballIUrl,
      tabContent: [
        {
          id: 'la-liga',
          title: 'La Liga',
          tabIcon: laLigaUrl,
        },
        {
          id: 'bundesliga',
          title: 'Bundes Liga',
          tabIcon: bundesLigaUrl,
        },
        {
          id: 'premier',
          title: 'Premier League',
          tabIcon: premierLeagueUrl,
        },
      ],
    },
    {
      id: 'basketball',
      title: 'Basketball',
      tabIcon: basketballUrl,
      tabContent: [
        {
          id: 'lba',
          title: 'LBA League',
          tabIcon: lbaLeagueUrl,
        },
        {
          id: 'bal',
          title: 'Bal League',
          tabIcon: balLeagueUrl,
        },
      ],
    },
    {
      id: 'volleyball',
      title: 'Volleyball',
      tabIcon: volleyballUrl,
    },
  ],
}
