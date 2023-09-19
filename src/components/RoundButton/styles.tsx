import { styled } from 'styled-components'

export const StyledRoundButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--bg-color-secondary);
  border-radius: 50%;
  position: relative;
  background: inherit;
`

export const StyledBadge = styled(StyledRoundButton)`
  width: 22px;
  height: 22px;
  font-size: 10px;
  color: var(--text-color-primary);
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(20%, -30%);
  background: red;
`
