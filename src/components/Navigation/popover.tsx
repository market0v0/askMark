import React, { useState, type ReactNode } from 'react'
import { Popover } from 'antd'
import Image from 'next/image'

interface MyPopoverProps {
  children: ReactNode
}

const NavPopover: React.FC<MyPopoverProps> = ({ children }) => {
  const [open, setOpen] = useState(false)

  const handleOpenChange = (newOpen: boolean): any => {
    setOpen(newOpen)
  }

  return (
    <Popover
      content={children}
      trigger='click'
      placement="bottom"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <div className='relative h-16 w-[6.5rem]'>
        <Image src={'/menu.svg'} fill alt='marked' />
      </div>
    </Popover>
  )
}

export default NavPopover
