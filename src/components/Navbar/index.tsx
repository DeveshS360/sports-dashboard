import { LogoutOutlined } from '@ant-design/icons'
import {
  StyledNavbarCategory,
  StyledNavbarContainer,
  StyledNavbarFooter,
  StyledNavbarHeader,
  StyledNavbarTitle,
} from './styles'
import navbarIcon from 'assets/images/rugby.png'
import laLigaUrl from 'assets/images/football-la-liga.jpg'
import { Tabs } from '../Tabs'

export const Navbar = () => {
  return (
    <StyledNavbarContainer>
      <StyledNavbarHeader>
        <img width={30} src={navbarIcon} alt="nav-icon" />
        <StyledNavbarTitle>Sportia</StyledNavbarTitle>
      </StyledNavbarHeader>
      <StyledNavbarCategory>Sports</StyledNavbarCategory>
      <Tabs
        defaultActiveTabId="a"
        tabs={[
          {
            id: 'a',
            title: 'Football',
            tabIcon: navbarIcon,
            tabContent: [
              {
                id: 'aa',
                title: 'La Liga',
                tabIcon: laLigaUrl,
              },
              {
                id: 'ab',
                title: 'La Liga',
                tabIcon: laLigaUrl,
              },
              {
                id: 'ac',
                title: 'La Liga',
                tabIcon: laLigaUrl,
              },
            ],
          },
          {
            id: 'b',
            title: 'Basketball',
            tabIcon: navbarIcon,
          },
          {
            id: 'c',
            title: 'Volleyball',
            tabIcon: navbarIcon,
          },
        ]}
      />
      <StyledNavbarFooter>
        <LogoutOutlined />
        <span>Log Out</span>
      </StyledNavbarFooter>
    </StyledNavbarContainer>
  )
}
