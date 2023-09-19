import { USER_INFO } from 'src/constants/data/user'
import {
  StyledMainContainer,
  StyledMainInfoFact,
  StyledMainInfoGreeting,
} from './styles'
import { FACT_OF_THE_DAY } from 'src/constants/data/fact'
import { AdvertisedMatch } from '../AdvertisedMatch'
import versusUrl from 'assets/images/versus.png'
import { LeagueList } from '../LeagueList'

export const MainInfo = () => {
  const { lastName } = USER_INFO

  return (
    <StyledMainContainer>
      <StyledMainInfoGreeting>Welcome {`${lastName}`}!</StyledMainInfoGreeting>
      <StyledMainInfoFact>{FACT_OF_THE_DAY}</StyledMainInfoFact>
      <AdvertisedMatch
        team1="Manchester City"
        team2="Arsenal"
        date="10 January, 2022"
        venue="Old Trafford Stadium"
        versusImgUrl={versusUrl}
      />
      <LeagueList />
    </StyledMainContainer>
  )
}
