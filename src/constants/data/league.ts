import barcelonaUrl from 'assets/images/barcelona.png'
import mUnitedUrl from 'assets/images/manchester-united.png'
import { LeagueDetailsProps } from 'src/components/LeagueDetails/types'
import laLigaUrl from 'assets/images/football-la-liga.jpg'
import premierLeagueUrl from 'assets/images/football-premier-league.jpeg'

export const LEAGUES: LeagueDetailsProps[] = [
  {
    leagueId: 'la',
    name: 'La Liga',
    leagueFullName: 'Spanish La Liga',
    imageUrl: laLigaUrl,

    matches: [
      {
        matchId: 'a',
        duration: 88,
        isStarred: false,
        teams: [
          {
            name: 'Barcelona',
            imageUrl: barcelonaUrl,
            score: 2,
          },
          {
            name: 'Manchester United',
            imageUrl: mUnitedUrl,
            score: 4,
          },
        ],
      },
      {
        matchId: 'b',
        duration: 70,
        isStarred: false,
        teams: [
          {
            name: 'Barcelona',
            imageUrl: barcelonaUrl,
            score: 2,
          },
          {
            name: 'Manchester United',
            imageUrl: mUnitedUrl,
            score: 2,
          },
        ],
      },
    ],
  },

  {
    leagueId: 'lb',
    name: 'Premier League',
    leagueFullName: 'English Premier League',
    imageUrl: premierLeagueUrl,

    matches: [
      {
        matchId: 'a',
        duration: 88,
        isStarred: false,
        teams: [
          {
            name: 'Barcelona',
            imageUrl: barcelonaUrl,
            score: 3,
          },
          {
            name: 'Manchester United',
            imageUrl: mUnitedUrl,
            score: 4,
          },
        ],
      },
      {
        matchId: 'b',
        duration: 70,
        isStarred: false,
        teams: [
          {
            name: 'Barcelona',
            imageUrl: barcelonaUrl,
            score: 6,
          },
          {
            name: 'Manchester United',
            imageUrl: mUnitedUrl,
            score: 5,
          },
        ],
      },
    ],
  },
  {
    leagueId: 'lc',
    name: 'La Liga',
    leagueFullName: 'Spanish La Liga',
    imageUrl: laLigaUrl,

    matches: [
      {
        matchId: 'a',
        duration: 88,
        isStarred: false,
        teams: [
          {
            name: 'Barcelona',
            imageUrl: barcelonaUrl,
            score: 1,
          },
          {
            name: 'Manchester United',
            imageUrl: mUnitedUrl,
            score: 3,
          },
        ],
      },
      {
        matchId: 'b',
        duration: 70,
        isStarred: false,
        teams: [
          {
            name: 'Barcelona',
            imageUrl: barcelonaUrl,
            score: 2,
          },
          {
            name: 'Manchester United',
            imageUrl: mUnitedUrl,
            score: 3,
          },
        ],
      },
    ],
  },

  {
    leagueId: 'ld',
    name: 'Premier League',
    leagueFullName: 'English Premier League',
    imageUrl: premierLeagueUrl,

    matches: [
      {
        matchId: 'a',
        duration: 88,
        isStarred: false,
        teams: [
          {
            name: 'Barcelona',
            imageUrl: barcelonaUrl,
            score: 2,
          },
          {
            name: 'Manchester United',
            imageUrl: mUnitedUrl,
            score: 5,
          },
        ],
      },
      {
        matchId: 'b',
        duration: 70,
        isStarred: false,
        teams: [
          {
            name: 'Barcelona',
            imageUrl: barcelonaUrl,
            score: 2,
          },
          {
            name: 'Manchester United',
            imageUrl: mUnitedUrl,
            score: 5,
          },
        ],
      },
    ],
  },
]
