import { styled } from 'styled-components'
import { TabItemStyleProps } from './types'

export const StyledTabItem = styled.button<TabItemStyleProps>`
  background: ${({ isSelected }) => (isSelected ? 'var(--purple)' : 'inherit')};
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  width: 100%;
`

export const StyledTabItemContentContainer = styled.div`
  margin-left: 20px;
  border-left: 1px solid var(--text-color-secondary);
  display: flex;
  flex-direction: column;
  gap: 15px 0;
`

export const StyledTabItemContent = styled.div`
  padding: 10px 20px;
`
