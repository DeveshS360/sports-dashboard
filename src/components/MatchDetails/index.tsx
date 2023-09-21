import { LineChartOutlined, StarFilled, StarOutlined } from '@ant-design/icons'
import {
  StyledMatchDetailsContainer,
  StyledMatchDetailsDuration,
  StyledMatchDetailsTeam,
  StyledMatchDetailsTeamIconContainer,
  StyledMatchScore,
} from './styles'
import { MatchDetailsProps } from '../LeagueDetails/types'
import { useDispatch } from 'react-redux'
import { starOrUnstarLeagueMatch } from 'src/redux/slices/SportsSlice'
import { Modal } from '../Modal'
import { useState } from 'react'

export const MatchDetails = (
  props: MatchDetailsProps & { matchLeagueId: string; idx: number; len: number }
) => {
  const { teams, duration, isStarred, matchId, matchLeagueId, idx, len } = props

  const [open, setOpen] = useState(false)
  const onClose = () => setOpen(false)
  const onOpen = () => setOpen(true)

  const dispatch = useDispatch()

  const iconStyle = {
    fontSize: 20,
    cursor: 'pointer',
    color: 'var(--text-color-secondary',
  }

  const starIconStyle = {
    ...iconStyle,
    color: isStarred ? 'yellow' : 'var(--text-color-secondary)',
  }

  const handleStarClick = () => {
    dispatch(starOrUnstarLeagueMatch({ matchId, leagueId: matchLeagueId }))
  }

  return (
    <>
      <StyledMatchDetailsContainer isFirst={idx === 0} isLast={idx === len - 1}>
        {isStarred ? (
          <StarFilled style={starIconStyle} onClick={handleStarClick} />
        ) : (
          <StarOutlined style={starIconStyle} onClick={handleStarClick} />
        )}
        <StyledMatchDetailsDuration>{duration}</StyledMatchDetailsDuration>
        <StyledMatchDetailsTeam>
          <StyledMatchDetailsTeamIconContainer>
            <img src={teams?.[0]?.imageUrl} alt="" />
          </StyledMatchDetailsTeamIconContainer>
          <span>{teams?.[0]?.name}</span>
        </StyledMatchDetailsTeam>
        <StyledMatchScore>
          {teams?.[0]?.score} : {teams?.[1]?.score}
        </StyledMatchScore>
        <StyledMatchDetailsTeam>
          <StyledMatchDetailsTeamIconContainer>
            <img src={teams?.[1]?.imageUrl} alt="" />
          </StyledMatchDetailsTeamIconContainer>
          <span>{teams?.[1]?.name}</span>
        </StyledMatchDetailsTeam>
        <LineChartOutlined style={iconStyle} onClick={onOpen} />
      </StyledMatchDetailsContainer>
      <Modal open={open} onClose={onClose} />
    </>
  )
}
