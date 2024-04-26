import Landing from '@/components/landing'
import DefaultLayout from '@/components/layout/default'
import useValidTokenRedirect from '@/hooks/useValidationRedirect'
import { Spin } from 'antd'

import React from 'react'

const Home: React.FC = () => {
  return (

    <DefaultLayout>
      <Spin spinning={useValidTokenRedirect('/')}>
        <div className='font-poppins px-2 flex  items-center justify-center py-20'>
        <Landing/>
        </div>
      </Spin>

  </DefaultLayout>

  )
}
export default Home
