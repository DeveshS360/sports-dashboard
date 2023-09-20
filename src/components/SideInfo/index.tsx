import { LiveMatch } from '../LiveMatch'
import { StyledSideInfoContainer } from './styles'
import { LatestArticles } from '../LatestArticles'
import { ProfileSection } from '../ProfileSection'

export const SideInfo = () => {
  return (
    <StyledSideInfoContainer>
      <ProfileSection />
      <LiveMatch />
      <LatestArticles />
    </StyledSideInfoContainer>
  )
}
