import { StyledBadge, StyledRoundButton } from './styles'
import { RoundButtonProps } from './types'

export const RoundButton = (props: RoundButtonProps) => {
  const { icon, notificationCount } = props
  return (
    <StyledRoundButton>
      {icon}
      {notificationCount && (
        <StyledBadge as="div">{notificationCount}</StyledBadge>
      )}
    </StyledRoundButton>
  )
}
