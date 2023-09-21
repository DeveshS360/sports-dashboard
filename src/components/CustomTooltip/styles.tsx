import { styled } from 'styled-components'

export const StyledToolTip = styled.div`
  border-radius: 20px;
  color: black;
  background: #089b80;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  min-width: 80px;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 50%;
    top: 100%;
    transform: translate(50%, -2%);
    border: 10px solid transparent;
    border-top-color: #089b80;
  }
`
