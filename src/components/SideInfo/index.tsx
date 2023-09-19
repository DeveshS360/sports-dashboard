import { LiveMatch } from '../LiveMatch'
import barcelonaUrl from 'assets/images/barcelona.png'
import mUnitedUrl from 'assets/images/manchester-united.png'
import { StyledSideInfoContainer } from './styles'
import { LatestArticles } from '../LatestArticles'
import footballUrl1 from 'assets/images/football-match1.jpeg'
import footballUrl2 from 'assets/images/football-match2.jpeg'
import footballUrl3 from 'assets/images/football-match3.jpeg'
import footballUrl4 from 'assets/images/football-match4.jpeg'

export const SideInfo = () => {
  return (
    <StyledSideInfoContainer>
      <LiveMatch
        description="Description about the match"
        teams={[
          {
            name: 'M. United',
            imageUrl: mUnitedUrl,
            score: 4,
          },
          {
            name: 'Barcelona',
            imageUrl: barcelonaUrl,
            score: 2,
          },
        ]}
      />
      <LatestArticles
        articles={[
          {
            news: 'Messi fights with Ronaldo, public does not seem happy at all',
            date: 'July 7, 2020 10:14 AM',
            imageUrl: footballUrl1,
          },
          {
            news: 'Messi fights with Ronaldo, public does not seem happy at all',
            date: 'July 7, 2020 10:14 AM',
            imageUrl: footballUrl2,
          },
          {
            news: 'Messi fights with Ronaldo, public does not seem happy at all',
            date: 'July 7, 2020 10:14 AM',
            imageUrl: footballUrl3,
          },
          {
            news: 'Messi fights with Ronaldo, public does not seem happy at all',
            date: 'July 7, 2020 10:14 AM',
            imageUrl: footballUrl4,
          },
        ]}
      />
    </StyledSideInfoContainer>
  )
}
