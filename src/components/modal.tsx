import React from 'react'
import { Modal } from 'antd'

interface CustomModalProps {
  visible: boolean
  onClose: () => void
  children: React.ReactNode // Add this line
}

const CustomModal: React.FC<CustomModalProps> = ({ visible, onClose, children }) => {
  return (
    <Modal visible={visible} onCancel={onClose} footer={null}>
      {children}
    </Modal>
  )
}

export default CustomModal
