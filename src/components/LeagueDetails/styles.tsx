import { styled, css } from 'styled-components'
import {
  ArrowContainerStyleProps,
  LeagueMatchesContainerStyleProps,
} from './types'

export const StyledLeagueDetailsToggleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`

export const StyledLeagueImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

export const StyledLeagueMatchesContainerWrapper = styled.div<LeagueMatchesContainerStyleProps>`
  visibility: hidden;
  max-height: 0;
  opacity: 0;
  transition: all 0.5s ease-out;
  overflow: hidden;

  ${({ isHidden }) =>
    !isHidden &&
    css`
      transition: all 0.5s ease-in;
      visibility: visible;
      max-height: 999px;
      opacity: 1;
      overflow: visible;
  }
    `}
`

export const StyledLeagueMatchesContainer = styled.div`
  margin-top: 20px;
  border: 1px solid gray;
  border-radius: var(--card-border-radius);
  padding: 20px;
`

export const StyledDownArrowContainer = styled.span<ArrowContainerStyleProps>`
  transform: ${({ isUp }) => (isUp ? 'rotate(180deg)' : 'rotate(0)')};
  cursor: pointer;
  transition: all 0.5s ease-out;
`
