import { LiveMatch } from '../LiveMatch'
import { StyledSideInfoContainer } from './styles'
import { LatestArticles } from '../LatestArticles'
import { ProfileSection } from '../ProfileSection'
import { LIVE_MATCH } from 'src/constants/data/liveMatch'
import { NEWS_ARTICLES } from 'src/constants/data/news'

export const SideInfo = () => {
  return (
    <StyledSideInfoContainer>
      <ProfileSection />
      <LiveMatch {...LIVE_MATCH} />
      <LatestArticles articles={NEWS_ARTICLES} />
    </StyledSideInfoContainer>
  )
}
