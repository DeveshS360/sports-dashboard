import { ReactNode } from 'react'

export interface ModalProps {
  open: boolean
  onClose: () => void
  children?: ReactNode
}

export interface ModalStyleProps {
  isOpen: boolean
}
