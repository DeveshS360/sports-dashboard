import { styled } from 'styled-components'

const StyledDashboardHeading = styled.div`
  width: 300px;
  height: 300px;
  background: var(--bg-color);
  font-size: 34px;
`
export const App = () => {
  return <StyledDashboardHeading>Sports Dashboard</StyledDashboardHeading>
}
