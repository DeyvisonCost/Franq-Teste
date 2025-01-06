import { ReactNode } from 'react'

export interface ModalProps {
  title: string
  description?: string
  children: ReactNode
  triggerText?: string
  onClose: () => void
  isOpen: boolean
}
