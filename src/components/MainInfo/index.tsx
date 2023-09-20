import {
  StyledMainContainer,
  StyledMainInfoFact,
  StyledMainInfoGreeting,
} from './styles'
import { FACT_OF_THE_DAY } from 'src/constants/data/fact'
import { AdvertisedMatch } from '../AdvertisedMatch'
import { LeagueList } from '../LeagueList'
import { useAppSelector } from 'src/redux/hooks'

export const MainInfo = () => {
  const userInfo = useAppSelector((state) => state.userStore.user)
  const { lastName } = userInfo

  return (
    <StyledMainContainer>
      <StyledMainInfoGreeting>Welcome {`${lastName}`}!</StyledMainInfoGreeting>
      <StyledMainInfoFact>{FACT_OF_THE_DAY}</StyledMainInfoFact>
      <AdvertisedMatch />
      <LeagueList />
    </StyledMainContainer>
  )
}
