import { BellOutlined, SettingOutlined } from '@ant-design/icons'
import { RoundButton } from '../RoundButton'
import { StyledProfileContainer } from './styles'
import { User } from '../User'

export const ProfileSection = () => {
  const iconStyle = { color: 'white', fontSize: 20 }
  return (
    <StyledProfileContainer>
      <RoundButton
        icon={<BellOutlined style={iconStyle} />}
        notificationCount={3}
      />
      <RoundButton icon={<SettingOutlined style={iconStyle} />} />
      <User
        firstName="Devesh"
        lastName="Sharma"
        country="India"
        city="Bengaluru"
      />
    </StyledProfileContainer>
  )
}
