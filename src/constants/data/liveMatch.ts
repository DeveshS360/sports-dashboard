import barcelonaUrl from 'assets/images/barcelona.png'
import mUnitedUrl from 'assets/images/manchester-united.png'
import chicagoBullsUrl from 'assets/images/chicago-bulls.png'
import bostonCelticsUrl from 'assets/images/boston-celtics.png'

export const FOOTBALL_LIVE_MATCH = {
  description: 'Description about the match',
  teams: [
    {
      name: 'M. United',
      imageUrl: mUnitedUrl,
      score: 4,
    },
    {
      name: 'Barcelona',
      imageUrl: barcelonaUrl,
      score: 2,
    },
  ],
}

export const BASKETBALL_LIVE_MATCH = {
  description: 'Description about the match',
  teams: [
    {
      name: 'Chicago Bulls',
      imageUrl: chicagoBullsUrl,
      score: 4,
    },
    {
      name: 'Boston Celtics',
      imageUrl: bostonCelticsUrl,
      score: 2,
    },
  ],
}
