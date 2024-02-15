import React, { useEffect, useState } from 'react'

import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <div className={'absolute left-0 right-0 top-6 md:px-[8vw] px-[2vw] z-50 flex'}>
      <div className='color-white flex min-h-[6rem] w-full items-center justify-between'>
      <div className='relative h-16 w-[20rem]'>
          <Image src={'/markedLogo.svg'} fill alt='marked' />
        </div>
        <div className='relative h-16 w-[6.5rem]'>
          <Image src={'/menu.svg'} fill alt='marked' />
        </div>

      </div>
    </div>
  )
}

export default Header
