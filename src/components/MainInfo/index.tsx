import { USER_INFO } from 'src/constants/data/user'
import {
  StyledMainContainer,
  StyledMainInfoFact,
  StyledMainInfoGreeting,
} from './styles'
import { FACT_OF_THE_DAY } from 'src/constants/data/fact'

export const MainInfo = () => {
  const { lastName } = USER_INFO

  return (
    <StyledMainContainer>
      <StyledMainInfoGreeting>Welcome {`${lastName}`}!</StyledMainInfoGreeting>
      <StyledMainInfoFact>{FACT_OF_THE_DAY}</StyledMainInfoFact>
    </StyledMainContainer>
  )
}
