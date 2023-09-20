import { LogoutOutlined } from '@ant-design/icons'
import {
  StyledNavbarCategory,
  StyledNavbarContainer,
  StyledNavbarFooter,
  StyledNavbarHeader,
  StyledNavbarTitle,
} from './styles'
import navbarIcon from 'assets/images/rugby.png'
import { Tabs } from '../Tabs'
import heartIcon from 'assets/images/heart.png'
import { MAIN_TABS } from 'src/constants/data/tabs'

export const Navbar = () => {
  return (
    <StyledNavbarContainer>
      <StyledNavbarHeader>
        <img width={30} src={navbarIcon} alt="nav-icon" />
        <StyledNavbarTitle>Sportia</StyledNavbarTitle>
      </StyledNavbarHeader>
      <StyledNavbarCategory>Sports</StyledNavbarCategory>
      <Tabs {...MAIN_TABS} />
      <StyledNavbarCategory>Other Menu</StyledNavbarCategory>
      <Tabs
        defaultActiveTabId=""
        tabs={[
          {
            id: 'fav',
            title: 'Favourites',
            tabIcon: heartIcon,
          },
          {
            id: 'support',
            title: 'Support',
            tabIcon: heartIcon,
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
