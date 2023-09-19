export interface MatchDetailsProps {
  matchId: string
  isStarred: boolean
  duration: number
  teams: {
    score: number
    name: string
    imageUrl: string
  }[]
}
export interface LeagueDetailsProps {
  matches: MatchDetailsProps[]
  name: string
  leagueFullName: string
  imageUrl: string
}

export interface ArrowContainerStyleProps {
  isUp?: boolean
}

export interface LeagueMatchesContainerStyleProps {
  isHidden: boolean
}
