import React, { type ReactElement } from 'react'
import Nav from '../nav'

interface props {
  children?: ReactElement | null
}

function DefaultLayout ({ children }: props): React.ReactElement {
  return (
    <div>
      <Nav/>
      <div >{children}</div>
    </div>
  )
}

export default DefaultLayout
