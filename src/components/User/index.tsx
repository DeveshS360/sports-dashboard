import { DownOutlined } from '@ant-design/icons'
import {
  StyledArticleContent,
  StyledArticleSecondaryText,
  StyledArticlePrimaryText,
} from '../LatestArticles/styles'
import { StyledUserAvatar, StyledUserContainer } from './styles'
import userImage from 'assets/images/person.jpeg'
import { USER_INFO } from 'src/constants/data/user'

export const User = () => {
  const { firstName, lastName, country, city } = USER_INFO

  return (
    <StyledUserContainer>
      <StyledArticleContent>
        <StyledUserAvatar src={userImage} />
        <div>
          <StyledArticlePrimaryText>{`${firstName} ${lastName}`}</StyledArticlePrimaryText>
          <StyledArticleSecondaryText>{`${city}, ${country}`}</StyledArticleSecondaryText>
        </div>
      </StyledArticleContent>
      <DownOutlined
        style={{ color: 'white', fontSize: 15, transform: 'scaleX(1.5)' }}
      />
    </StyledUserContainer>
  )
}
