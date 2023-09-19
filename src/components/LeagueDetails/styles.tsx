import { styled } from 'styled-components'
import { ArrowContainerStyleProps } from './types'

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

export const StyledLeagueMatchesContainer = styled.div`
  padding: 20px;
  border-radius: var(--card-border-radius);
  border: 1px solid gray;
  margin-top: 20px;

  div:first-child {
    padding-top: 0;
  }

  div:last-child {
    padding-bottom: 0;
    border-bottom: 1px none;
  }
`

export const StyledDownArrowContainer = styled.span<ArrowContainerStyleProps>`
  transform: ${({ isUp }) => (isUp ? 'rotate(180deg)' : 'rotate(0)')};
  cursor: pointer;
  transition: all 0.3s ease-out;
`
