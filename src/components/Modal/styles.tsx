import { styled, css } from 'styled-components'
import { ModalStyleProps } from './types'

export const StyledModalOverLay = styled.div<ModalStyleProps>`
  position: fixed;
  inset: 0;
  background: rgba(23, 23, 23, 0.85);
  opacity: 0;
  visibility: hidden;
  z-index: 999;
  transition: all 0.5s linear;

  ${({ isOpen }) =>
    isOpen &&
    css`
      visibility: visible;
      opacity: 1;
      transition: all 0.5 linear;
    `}
`

export const StyledModal = styled.div<ModalStyleProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 400px;
  min-height: 300px;
  opacity: inherit;
  transition: inherit;
  border-radius: 5px;
  padding: 30px;
  background: blue;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transition: inherit;
    `}
`

export const StyledClose = styled.button`
  position: absolute;
  background: none;
  top: 20px;
  right: 20px;
`
