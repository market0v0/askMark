import React, { useState } from 'react'

import Image from 'next/image'
import useValidToken from '@/hooks/useValidate'
import DefaultNav from './defaultNav'
import MyPopover from '../popover'

const Header: React.FC = () => {
  const [popoverOpen, setPopoverOpen] = useState(false)
  const [valid] = useState(useValidToken())
  return (
    <div
      className={'relative left-0 right-0 top-6 z-50 flex px-[2vw] md:px-[8vw]'}
    >
      <div className='color-white flex min-h-[6rem] w-full items-center justify-between'>
        <div className='relative h-16 w-[20rem]'>
          <Image
            src={'/markedLogo.svg'}
            fill
            alt='marked'
            onClick={() => (window.location.href = valid ? '/home' : '/')}
          />
        </div>

        <MyPopover open={popoverOpen} setOpen={setPopoverOpen}>
          {[
            // eslint-disable-next-line react/jsx-key
            <div onClick={() => { setPopoverOpen(!popoverOpen) }} className='relative h-16 w-[6.5rem]'>
              <Image src={'/menu.svg'} fill alt='marked' />
            </div>,
             // eslint-disable-next-line react/jsx-key
             <DefaultNav />
          ]}
        </MyPopover>
      </div>
    </div>
  )
}

export default Header
