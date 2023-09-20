export interface Article {
  imageUrl: string
  date: string
  news: string
}

export interface LatestArticleProps {
  articles: Article[]
}
