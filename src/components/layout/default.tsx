import React, { type ReactElement } from 'react'
import Header from '../Navigation/header'

interface props {
  children?: ReactElement | null
}

function DefaultLayout ({ children }: props): React.ReactElement {
  return (
    <div className='bg-gradient-to-br min-h-screen'>
      <Header/>
      <div className='font-poppins px-2 flex items-center justify-center ' >{children}</div>
    </div>
  )
}

export default DefaultLayout
