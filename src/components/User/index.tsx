import { DownOutlined } from '@ant-design/icons'
import {
  StyledArticleContent,
  StyledArticleSecondaryText,
  StyledArticlePrimaryText,
} from '../LatestArticles/styles'
import { StyledUserAvatar, StyledUserContainer } from './styles'
import { UserProps } from './types'
import userImage from 'assets/images/person.jpeg'

export const User = (props: UserProps) => {
  const { firstName, lastName, country, city } = props

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
