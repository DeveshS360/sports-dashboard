import { StyledTextWithIcon, StyledTextWithIconText } from './styles'
import { TextWithIconProps } from './types'

export const TextWithIcon = (props: TextWithIconProps) => {
  const { iconUrl, text } = props

  return (
    <StyledTextWithIcon>
      <img src={iconUrl} alt="" />
      <StyledTextWithIconText>{text}</StyledTextWithIconText>
    </StyledTextWithIcon>
  )
}
