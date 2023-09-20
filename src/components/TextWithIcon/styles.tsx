import { styled } from 'styled-components'

export const StyledTextWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 0px 10px;

  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
`

export const StyledTextWithIconText = styled.div`
  color: var(--text-color-primary);
  backgroud: inherit;
`
