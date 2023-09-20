import navbarIcon from 'assets/images/rugby.png'
import laLigaUrl from 'assets/images/football-la-liga.jpg'
import { TabsProps } from 'src/components/Tabs/types'

export const MAIN_TABS: TabsProps = {
  defaultActiveTabId: 'football',
  tabs: [
    {
      id: 'football',
      title: 'Football',
      tabIcon: navbarIcon,
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
      tabIcon: navbarIcon,
    },
    {
      id: 'volleyball',
      title: 'Volleyball',
      tabIcon: navbarIcon,
    },
  ],
}
