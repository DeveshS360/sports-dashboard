import laLigaUrl from 'assets/images/football-la-liga.jpg'
import { TabsProps } from 'src/components/Tabs/types'
import footballIUrl from 'assets/images/football.png'
import basketballUrl from 'assets/images/basketball.png'
import volleyballUrl from 'assets/images/volleyball.jpeg'

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
          tabIcon: laLigaUrl,
        },
        {
          id: 'premier',
          title: 'Premier League',
          tabIcon: laLigaUrl,
        },
      ],
    },
    {
      id: 'basketball',
      title: 'Basketball',
      tabIcon: basketballUrl,
    },
    {
      id: 'volleyball',
      title: 'Volleyball',
      tabIcon: volleyballUrl,
    },
  ],
}
