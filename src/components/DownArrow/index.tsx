import { DownOutlined } from '@ant-design/icons'

export const DownArrow = (props) => {
  const iconStyle = { color: 'white', fontSize: 15, transform: 'scaleX(1.5)' }

  return <DownOutlined style={iconStyle} {...props} />
}
