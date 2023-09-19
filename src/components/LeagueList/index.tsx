import { LEAGUES } from 'src/constants/data/league'
import { StyledMatchListContainer, StyledMatchListTitle } from './styles'
import { LeagueDetails } from '../LeagueDetails'

export const LeagueList = () => {
  return (
    <StyledMatchListContainer>
      <StyledMatchListTitle>{`Today's Matches`}</StyledMatchListTitle>
      {LEAGUES.map((league) => (
        <LeagueDetails key={league.leagueId} {...league} />
      ))}
    </StyledMatchListContainer>
  )
}
