import {
  StyledMainContainer,
  StyledMainInfoFact,
  StyledMainInfoGreeting,
} from './styles'
import { AdvertisedMatch } from '../AdvertisedMatch'
import { LeagueList } from '../LeagueList'
import { useAppSelector } from 'src/redux/hooks'

export const MainInfo = () => {
  const userInfo = useAppSelector((state) => state.userStore.user)
  const { lastName } = userInfo
  const factOfTheDay = useAppSelector(
    (state) => state.sportsStore.activeSportData.fact
  )

  return (
    <StyledMainContainer>
      <StyledMainInfoGreeting>Welcome {`${lastName}`}!</StyledMainInfoGreeting>
      <StyledMainInfoFact>{factOfTheDay}</StyledMainInfoFact>
      <AdvertisedMatch />
      <LeagueList />
    </StyledMainContainer>
  )
}
