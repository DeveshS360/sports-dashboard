import { LiveMatch } from '../LiveMatch'
import barcelonaUrl from 'assets/images/barcelona.png'
import mUnitedUrl from 'assets/images/manchester-united.png'
import { StyledSideInfoContainer } from './styles'

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
    </StyledSideInfoContainer>
  )
}
