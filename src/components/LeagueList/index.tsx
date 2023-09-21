import { StyledMatchListContainer, StyledMatchListTitle } from './styles'
import { LeagueDetails } from '../LeagueDetails'
import { useAppSelector } from 'src/redux/hooks'

export const LeagueList = () => {
  const leagues = useAppSelector(
    (state) => state.sportsStore.sportsStoreData.activeSportData.leagues
  )
  return (
    <StyledMatchListContainer>
      <StyledMatchListTitle>{`Today's Matches`}</StyledMatchListTitle>
      {leagues.map((league) => (
        <LeagueDetails key={league.leagueId} {...league} />
      ))}
    </StyledMatchListContainer>
  )
}
