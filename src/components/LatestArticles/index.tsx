import {
  StyledArticleContent,
  StyledArticleContentContainer,
  StyledArticleSecondaryText,
  StyledArticleImage,
  StyledArticlePrimaryText,
  StyledArticlesContainer,
  StyledArticlesHeading,
} from './styles'
import { LatestArticleProps } from './types'

export const LatestArticles = (props: LatestArticleProps) => {
  const { articles } = props
  return (
    <StyledArticlesContainer>
      <StyledArticlesHeading>Latest Articles</StyledArticlesHeading>
      <StyledArticleContentContainer>
        {articles?.map((article, idx) => (
          <StyledArticleContent key={idx}>
            <StyledArticleImage src={article?.imageUrl} />
            <div>
              <StyledArticlePrimaryText>
                {article?.news}
              </StyledArticlePrimaryText>
              <StyledArticleSecondaryText>
                {article.date}
              </StyledArticleSecondaryText>
            </div>
          </StyledArticleContent>
        ))}
      </StyledArticleContentContainer>
    </StyledArticlesContainer>
  )
}
