import Landing from '@/components/landing'
import DefaultLayout from '@/components/layout/default'

import React from 'react'

const Home: React.FC = () => {
  return (

    <DefaultLayout>
        <div className='font-poppins px-2 flex  items-center justify-center py-20'>
        <Landing/>

        </div>
  </DefaultLayout>

  )
}
export default Home
