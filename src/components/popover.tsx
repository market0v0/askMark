import React, { type ReactNode } from 'react'
import { Popover } from 'antd'

interface MyPopoverProps {
  children: [ReactNode, ReactNode]
  open: boolean
  setOpen: (open: boolean) => void
}

const MyPopover: React.FC<MyPopoverProps> = ({ children, open, setOpen }) => {
  const handleOpenChange = (newOpen: boolean): void => {
    setOpen(newOpen)
  }

  return (
    <Popover
      content={children[1]}
      trigger='click'
      placement="bottom"
      visible={open}
      onVisibleChange={handleOpenChange}
    >
      {children[0]}
    </Popover>
  )
}
export default MyPopover
