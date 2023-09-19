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

import { LiveMatchProps } from './types'

export const LiveMatch = (props: LiveMatchProps) => {
  const { description, teams } = props
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
