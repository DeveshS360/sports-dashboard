import { BellOutlined, SettingOutlined } from '@ant-design/icons'
import { RoundButton } from '../RoundButton'
import { StyledProfileContainer } from './styles'
import { User } from '../User'
import { useAppSelector } from 'src/redux/hooks'

export const ProfileSection = () => {
  const iconStyle = { color: 'white', fontSize: 20 }
  const notifications = useAppSelector((state) => state.userStore.notifications)
  return (
    <StyledProfileContainer>
      <RoundButton
        icon={<BellOutlined style={iconStyle} />}
        notificationCount={notifications}
      />
      <RoundButton icon={<SettingOutlined style={iconStyle} />} />
      <User />
    </StyledProfileContainer>
  )
}
