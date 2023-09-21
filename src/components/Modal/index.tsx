import { CloseOutlined } from '@ant-design/icons'
import { StyledClose, StyledModal, StyledModalOverLay } from './styles'
import { ModalProps } from './types'

export const Modal = (props: ModalProps) => {
  const { open, onClose, children } = props

  return (
    <StyledModalOverLay isOpen={open} onClick={onClose}>
      <StyledModal
        isOpen={open}
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        Hello World
        {children}
        <StyledClose>
          <CloseOutlined
            onClick={onClose}
            style={{ color: 'var(--text-color-primary', fontSize: 20 }}
          />
        </StyledClose>
      </StyledModal>
    </StyledModalOverLay>
  )
}
