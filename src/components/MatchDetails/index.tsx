import { LineChartOutlined, StarOutlined } from '@ant-design/icons'
import {
  StyledMatchDetailsContainer,
  StyledMatchDetailsDuration,
  StyledMatchDetailsTeam,
  StyledMatchDetailsTeamIconContainer,
  StyledMatchScore,
} from './styles'
import { MatchDetailsProps } from '../LeagueDetails/types'

export const MatchDetails = (props: MatchDetailsProps) => {
  const iconStyle = {
    fontSize: 20,
    color: 'var(--text-color-secondary)',
    cursor: 'pointer',
  }

  const { teams, duration } = props

  return (
    <StyledMatchDetailsContainer>
      <StarOutlined
        style={iconStyle}
        onClick={() => {
          console.log('hello ')
        }}
      />
      <StyledMatchDetailsDuration>{duration}</StyledMatchDetailsDuration>
      <StyledMatchDetailsTeam>
        <StyledMatchDetailsTeamIconContainer>
          <img src={teams?.[0]?.imageUrl} alt="" />
        </StyledMatchDetailsTeamIconContainer>
        <span>{teams?.[0]?.name}</span>
      </StyledMatchDetailsTeam>
      <StyledMatchScore>2 : 4</StyledMatchScore>
      <StyledMatchDetailsTeam>
        <StyledMatchDetailsTeamIconContainer>
          <img src={teams?.[1]?.imageUrl} alt="" />
        </StyledMatchDetailsTeamIconContainer>
        <span>{teams?.[1]?.name}</span>
      </StyledMatchDetailsTeam>
      <LineChartOutlined style={iconStyle} />
    </StyledMatchDetailsContainer>
  )
}
