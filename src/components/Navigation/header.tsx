import React, { useState } from 'react'

import Image from 'next/image'
import NavPopover from './popover'
import useValidToken from '@/hooks/useValidate'
import DefaultNav from './defaultNav'

const Header: React.FC = () => {
  const [valid] = useState(useValidToken())
  return (
    <div className={'relative left-0 right-0 top-6 md:px-[8vw] px-[2vw] z-50 flex'}>
      <div className='color-white flex min-h-[6rem] w-full items-center justify-between'>
      <div className='relative h-16 w-[20rem]'>
          <Image src={'/markedLogo.svg'} fill alt='marked' onClick={() => (window.location.href = valid ? '/home' : '/')}/>
        </div>
        <NavPopover >
        <div className='w-[12rem]'>
          <DefaultNav/>
        </div>
        </NavPopover>
      </div>
    </div>
  )
}

export default Header
