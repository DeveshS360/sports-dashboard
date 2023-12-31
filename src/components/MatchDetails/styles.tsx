import { styled, css } from 'styled-components'
import { StyledLiveMatchScore } from '../LiveMatch/styles'
import { MatchDetailsContainerStyleProps } from './types'

export const StyledMatchDetailsContainer = styled.div<MatchDetailsContainerStyleProps>`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid gray;

  ${({ isFirst }) =>
    isFirst &&
    css`
      padding-top: 0;
    `}

  ${({ isLast }) =>
    isLast &&
    css`
      padding-bottom: 0;
      border-bottom: none;
    `}

  justify-content: space-between;
`

export const StyledMatchDetailsTeam = styled.div`
  display: flex;
  align-items: center;
  min-width: 150px;
  gap: 0 5px;

  * {
    color: var(--text-color-primary);
    font-size: 14px;
  }
`

export const StyledMatchDetailsTeamIconContainer = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(80, 75, 75);
  border-radius: 50%;

  img {
    width: 20px;
    height: 20px;
  }
`

export const StyledMatchDetailsDuration = styled.div`
  color: green;
  font-size: 14px;
`

export const StyledMatchScore = styled(StyledLiveMatchScore)`
  font-size: 12px;
  padding: 4px 8px;
`
