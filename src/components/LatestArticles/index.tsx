import { useAppSelector } from 'src/redux/hooks'
import {
  StyledArticleContent,
  StyledArticleContentContainer,
  StyledArticleSecondaryText,
  StyledArticleImage,
  StyledArticlePrimaryText,
  StyledArticlesContainer,
  StyledArticlesHeading,
} from './styles'

export const LatestArticles = () => {
  const articles = useAppSelector(
    (state) => state.sportsStore.activeSportData.articles
  )
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
