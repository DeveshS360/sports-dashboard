import { useState } from 'react'
import {
  StyledArticleContent,
  StyledArticlePrimaryText,
  StyledArticleSecondaryText,
} from '../LatestArticles/styles'
import { MatchDetails } from '../MatchDetails'
import {
  StyledDownArrowContainer,
  StyledLeagueDetailsToggleSection,
  StyledLeagueImage,
  StyledLeagueMatchesContainer,
} from './styles'
import { LeagueDetailsProps } from './types'
import { DownArrow } from '../DownArrow'

export const LeagueDetails = (props: LeagueDetailsProps) => {
  const { name, leagueFullName, matches, imageUrl } = props

  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <>
      <StyledLeagueDetailsToggleSection>
        <StyledArticleContent>
          <StyledLeagueImage src={imageUrl} />
          <div>
            <StyledArticlePrimaryText>{name}</StyledArticlePrimaryText>
            <StyledArticleSecondaryText>
              {leagueFullName} - {matches?.length} Matches
            </StyledArticleSecondaryText>
          </div>
        </StyledArticleContent>
        <StyledDownArrowContainer
          onClick={() => setIsCollapsed((prev) => !prev)}
          isUp={isCollapsed ? false : true}
        >
          <DownArrow />
        </StyledDownArrowContainer>
      </StyledLeagueDetailsToggleSection>
      {!isCollapsed && (
        <StyledLeagueMatchesContainer>
          {matches.map((match) => (
            <MatchDetails key={match.matchId} {...match} />
          ))}
        </StyledLeagueMatchesContainer>
      )}
    </>
  )
}
