import { styled } from 'styled-components'

export const StyledLiveMatchContainer = styled.div`
  background: var(--bg-color-secondary);
  padding: 40px;
  width: 100%;
  border-radius: var(--card-border-radius);
  margin: var(--card-grid-gap-size) 0;
`

export const StyledLiveMatchTitle = styled.div`
  color: var(--text-color-primary);
  font-size: 18px;
  font-weight: bold;
`

export const StyledLiveMatchDescription = styled.div`
  color: var(--text-color-secondary);
  font-size: 16px;
  margin-top: 10px;
  font-weight: lighter;
`

export const StyledLiveMatchDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px auto;
`

export const StyledLiveMatchTeamName = styled.div`
  color: var(--text-color-primary);
  font-size: 16px;
  margin-top: 12px;
`

export const StyledLiveMatchTeamContainer = styled.div`
  text-align: center;
`

export const StyledLiveMatchTeam = styled.img`
  width: 80px;
  height: 80px;
  margin: 0 auto;
`

export const StyledLiveMatchScore = styled.div`
  padding: 8px 15px;
  color: var(--text-color-primary);
  background: rgb(80, 75, 75);
  font-weight: bold;
  font-size: 18px;
  border-radius: 30px;
`

export const StyledLiveMatchDetailCta = styled.button`
  background: var(--purple);
  color: var(--text-color-primary);
  width: 100%;
  padding: 10px;
  text-align: center;
  border-radius: 10px;
  font-size: 18px;
  border: none;
  outline: none;
`
