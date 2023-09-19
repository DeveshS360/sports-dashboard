import {
  StyledArticleContent,
  StyledArticleContentContainer,
  StyledArticleDate,
  StyledArticleImage,
  StyledArticleText,
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
              <StyledArticleText>{article?.news}</StyledArticleText>
              <StyledArticleDate>{article.date}</StyledArticleDate>
            </div>
          </StyledArticleContent>
        ))}
      </StyledArticleContentContainer>
    </StyledArticlesContainer>
  )
}
