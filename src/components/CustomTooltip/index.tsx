import { StyledToolTip } from './styles'
import { TooltipProps } from './types'

export const CustomTooltip = (props: TooltipProps) => {
  const { text } = props
  return <StyledToolTip>{text}</StyledToolTip>
}
