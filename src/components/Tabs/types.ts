import { TabItemProps } from '../TabItem/types'

export interface TabProps extends TabItemProps {
  tabContent?: TabItemProps[]
  activeTabId: string
  setActiveTabId: (_: string) => void
  onTabClick?: (_: string) => void
}
export interface TabsProps {
  defaultActiveTabId: string
  onTabClick?: (_: string) => void
  tabs: Omit<TabProps, 'activeTabId' | 'setActiveTabId'>[]
}
