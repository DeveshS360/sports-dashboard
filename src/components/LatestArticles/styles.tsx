import { styled } from 'styled-components'

export const StyledArticlesContainer = styled.article`
  padding: 24px;
  background: var(--bg-color-secondary);
  border-radius: var(--card-border-radius);
  max-height: 500px;
  overflow-y: auto;
`

export const StyledArticlesHeading = styled.div`
  color: var(--text-color-primary);
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 30px;
`

export const StyledArticleContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const StyledArticleContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0px 8px;
`

export const StyledArticleImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
`

export const StyledArticlePrimaryText = styled.p`
  color: var(--text-color-primary);
  font-size: 14px;
`

export const StyledArticleSecondaryText = styled.div`
  color: var(--text-color-secondary);
  font-size: 10px;
  font-weight: lighter;
`
