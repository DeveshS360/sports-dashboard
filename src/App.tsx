import { MainInfo } from './components/MainInfo'
import { Navbar } from './components/Navbar'
import { SideInfo } from './components/SideInfo'
import { StyledAppContainer } from './styles'

export const App = () => {
  return (
    <StyledAppContainer>
      <Navbar />
      <MainInfo />
      <SideInfo />
    </StyledAppContainer>
  )
}
