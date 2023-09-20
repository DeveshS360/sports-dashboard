import navbarIcon from 'assets/images/rugby.png'
import laLigaUrl from 'assets/images/football-la-liga.jpg'

export const MAIN_TABS = {
  defaultActiveTabId: 'a',
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
