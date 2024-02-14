import Landing from '@/components/landing'
import DefaultLayout from '@/components/layout/default'

import React from 'react'

const Home: React.FC = () => {
  return <DefaultLayout>
  <div className='font-poppins px-2 flex min-h-[100vh] items-center justify-center bg-gradient-to-br'>
    <Landing/>
  </div>
  </DefaultLayout>
}
export default Home
