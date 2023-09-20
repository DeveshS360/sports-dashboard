import { useAppSelector } from 'src/redux/hooks'
import {
  StyledLiveMatchContainer,
  StyledLiveMatchDescription,
  StyledLiveMatchDetailCta,
  StyledLiveMatchDetailsContainer,
  StyledLiveMatchScore,
  StyledLiveMatchTeam,
  StyledLiveMatchTeamContainer,
  StyledLiveMatchTeamName,
  StyledLiveMatchTitle,
} from './styles'

export const LiveMatch = () => {
  const liveMatchDetails = useAppSelector(
    (state) => state.sportsStore.activeSportData.liveMatch
  )

  const { description, teams } = liveMatchDetails
  return (
    <StyledLiveMatchContainer>
      <StyledLiveMatchTitle>Live Matches</StyledLiveMatchTitle>
      <StyledLiveMatchDescription>{description}</StyledLiveMatchDescription>
      <StyledLiveMatchDetailsContainer>
        <StyledLiveMatchTeamContainer>
          <StyledLiveMatchTeam src={teams?.[0]?.imageUrl} />
          <StyledLiveMatchTeamName>{teams?.[0]?.name}</StyledLiveMatchTeamName>
        </StyledLiveMatchTeamContainer>
        <StyledLiveMatchScore>{`${teams?.[0]?.score} : ${teams?.[1]?.score}`}</StyledLiveMatchScore>
        <StyledLiveMatchTeamContainer>
          <StyledLiveMatchTeam src={teams?.[1]?.imageUrl} />
          <StyledLiveMatchTeamName>{teams?.[1]?.name}</StyledLiveMatchTeamName>
        </StyledLiveMatchTeamContainer>
      </StyledLiveMatchDetailsContainer>
      <StyledLiveMatchDetailCta>Match Detail</StyledLiveMatchDetailCta>
    </StyledLiveMatchContainer>
  )
}
