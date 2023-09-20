import { styled } from 'styled-components'

export const StyledNavbarContainer = styled.nav`
  width: 350px;
  flex-shrink: 0;
  background: var(--bg-color-secondary);
  padding: 40px 15px;
  position: fixed;
  top: 0;
  bottom: 0;
`

export const StyledNavbarHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 0px 15px;
  padding: 0 15px;
`

export const StyledNavbarTitle = styled.span`
  color: var(--text-color-primary);
  font-weight: lighter;
  font-size: 20px;
`

export const StyledNavbarCategory = styled.div`
  color: var(--text-color-secondary);
  font-weight: lighter;
  font-size: 12px;
  padding: 50px 0px 0px 15px;
  margin-bottom: 20px;
`

export const StyledNavbarFooter = styled.footer`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0px 10px;
  left: 30px;
  bottom: 40px;
  cursor: pointer;

  * {
    color: rgb(209, 32, 62);
  }
`
