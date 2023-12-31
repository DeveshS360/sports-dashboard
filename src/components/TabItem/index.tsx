import { useEffect, useState } from 'react'
import { DownArrow } from '../DownArrow'
import {
  StyledAccordion,
  StyledDownArrowContainer,
} from '../LeagueDetails/styles'
import { TabProps } from '../Tabs/types'
import { TextWithIcon } from '../TextWithIcon'
import {
  StyledTabItem,
  StyledTabItemContent,
  StyledTabItemContentContainer,
} from './styles'

export const TabItem = (props: TabProps) => {
  const {
    activeTabId,
    setActiveTabId,
    id,
    title,
    tabIcon,
    onTabClick,
    tabContent,
  } = props

  const isActive = activeTabId === id

  const [isOpen, setIsOpen] = useState(isActive)

  useEffect(() => {
    setIsOpen(isActive)
  }, [isActive])

  const handleClick = () => {
    setIsOpen((prev) => !prev)
    setActiveTabId(id)
    onTabClick?.(id)
  }

  return (
    <div>
      <StyledTabItem isSelected={isActive} onClick={handleClick}>
        <TextWithIcon iconUrl={tabIcon} text={title} />
        {!!tabContent?.length && (
          <StyledDownArrowContainer isUp={!isOpen}>
            <DownArrow />
          </StyledDownArrowContainer>
        )}
      </StyledTabItem>
      {!!tabContent?.length && (
        <StyledAccordion isHidden={!isOpen}>
          <StyledTabItemContentContainer>
            {tabContent?.map((content) => (
              <StyledTabItemContent key={content.id}>
                <TextWithIcon iconUrl={content.tabIcon} text={content.title} />
              </StyledTabItemContent>
            ))}
          </StyledTabItemContentContainer>
        </StyledAccordion>
      )}
    </div>
  )
}
