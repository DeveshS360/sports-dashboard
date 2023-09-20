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
import { useAppSelector } from 'src/redux/hooks'
import { useDispatch } from 'react-redux'
import { setActiveSportsData } from 'src/redux/slices/SportsSlice'
import { SPORTS_DATA } from 'src/constants/data/sports'
import callSupportIcon from 'assets/images/call-support.jpeg'

export const Navbar = () => {
  const sportsTabData = useAppSelector((state) => state.sportsStore.tabData)
  const dispatch = useDispatch()
  const handleTabChange = (tabName: string) => {
    dispatch(setActiveSportsData(SPORTS_DATA[tabName]))
  }
  return (
    <StyledNavbarContainer>
      <StyledNavbarHeader>
        <img width={30} src={navbarIcon} alt="nav-icon" />
        <StyledNavbarTitle>Sportia</StyledNavbarTitle>
      </StyledNavbarHeader>
      <StyledNavbarCategory>Sports</StyledNavbarCategory>
      <Tabs {...sportsTabData} onTabClick={handleTabChange} />
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
            tabIcon: callSupportIcon,
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
