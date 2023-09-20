import barcelonaUrl from 'assets/images/barcelona.png'
import mUnitedUrl from 'assets/images/manchester-united.png'
import { LeagueDetailsProps } from 'src/components/LeagueDetails/types'
import laLigaUrl from 'assets/images/football-la-liga.jpg'
import premierLeagueUrl from 'assets/images/football-premier-league.jpeg'
import lbaLeagueUrl from 'assets/images/basketball-lba.png'
import balLeagueUrl from 'assets/images/basketball-bal.jpeg'
import chicagoBullsUrl from 'assets/images/chicago-bulls.png'
import bostonCelticsUrl from 'assets/images/boston-celtics.png'

export const FOOTBALL_LEAGUES: LeagueDetailsProps[] = [
  {
    leagueId: 'fla',
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
    leagueId: 'flb',
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
    leagueId: 'flc',
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
    leagueId: 'fld',
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

export const BASKETBALL_LEAGUES: LeagueDetailsProps[] = [
  {
    leagueId: 'bla',
    name: 'LBA League',
    leagueFullName: 'Liberia Basketball Association',
    imageUrl: lbaLeagueUrl,

    matches: [
      {
        matchId: 'a',
        duration: 88,
        isStarred: false,
        teams: [
          {
            name: 'Chicago Bulls',
            imageUrl: chicagoBullsUrl,
            score: 2,
          },
          {
            name: 'Boston Celtics',
            imageUrl: bostonCelticsUrl,
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
            name: 'Boston Celtics',
            imageUrl: bostonCelticsUrl,
            score: 2,
          },
          {
            name: 'Chicago Bulls',
            imageUrl: chicagoBullsUrl,
            score: 2,
          },
        ],
      },
    ],
  },

  {
    leagueId: 'blb',
    name: 'BAL League',
    leagueFullName: 'Basketball African League',
    imageUrl: balLeagueUrl,

    matches: [
      {
        matchId: 'a',
        duration: 88,
        isStarred: false,
        teams: [
          {
            name: 'Boston Celtics',
            imageUrl: bostonCelticsUrl,
            score: 3,
          },
          {
            name: 'Chicago Bulls',
            imageUrl: chicagoBullsUrl,
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
            name: 'Chicago Bulls',
            imageUrl: chicagoBullsUrl,
            score: 6,
          },
          {
            name: 'Boston Celtics',
            imageUrl: bostonCelticsUrl,
            score: 5,
          },
        ],
      },
    ],
  },
  {
    leagueId: 'blc',
    name: 'LBA League',
    leagueFullName: 'Liberia Basketball Association',
    imageUrl: lbaLeagueUrl,

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
    leagueId: 'lbd',
    name: 'BAL League',
    leagueFullName: 'Basketball African League',
    imageUrl: balLeagueUrl,

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
