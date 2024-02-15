import React, { type ReactElement } from 'react'
import Header from '../header'

interface props {
  children?: ReactElement | null
}

function DefaultLayout ({ children }: props): React.ReactElement {
  return (
    <div>
      <Header/>
      <div >{children}</div>
    </div>
  )
}

export default DefaultLayout
