import { LeagueDetails } from '../LeagueDetails'
import { StyledMatchListContainer, StyledMatchListTitle } from './styles'
import laLigaUrl from 'assets/images/football-la-liga.jpg'
import barcelonaUrl from 'assets/images/barcelona.png'
import mUnitedUrl from 'assets/images/manchester-united.png'

export const LeagueList = () => {
  return (
    <StyledMatchListContainer>
      <StyledMatchListTitle>{`Today's Matches`}</StyledMatchListTitle>
      <LeagueDetails
        name="La Liga"
        leagueFullName="Spanish La Liga"
        matches={[
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
        ]}
        imageUrl={laLigaUrl}
      />
      <LeagueDetails
        name="La Liga"
        leagueFullName="Spanish La Liga"
        matches={[
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
                name: 'Manchester United',
                imageUrl: barcelonaUrl,
                score: 2,
              },
              {
                name: 'Madrid',
                imageUrl: mUnitedUrl,
                score: 5,
              },
            ],
          },
        ]}
        imageUrl={laLigaUrl}
      />
    </StyledMatchListContainer>
  )
}
