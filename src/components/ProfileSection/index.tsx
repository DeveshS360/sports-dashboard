import { BellOutlined } from '@ant-design/icons'
import { RoundButton } from '../RoundButton'
import { StyledProfileContainer } from './styles'

export const ProfileSection = () => {
  return (
    <StyledProfileContainer>
      <RoundButton
        icon={<BellOutlined style={{ color: 'white', fontSize: 20 }} />}
        notificationCount={3}
      />
    </StyledProfileContainer>
  )
}
