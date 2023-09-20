import { useState } from 'react'
import { TabsProps } from './types'
import { TabItem } from '../TabItem'
import { StyledTabs } from './styles'

export const Tabs = (props: TabsProps) => {
  const { defaultActiveTabId, tabs, onTabClick } = props
  const [activeTabId, setActiveTabId] = useState(defaultActiveTabId)

  return (
    <StyledTabs>
      {tabs?.map((tabData) => (
        <TabItem
          key={tabData.id}
          activeTabId={activeTabId}
          setActiveTabId={setActiveTabId}
          {...tabData}
          onTabClick={onTabClick}
        />
      ))}
    </StyledTabs>
  )
}
