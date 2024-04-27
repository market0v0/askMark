import Landing from '@/components/landing'
import DefaultLayout from '@/components/layout/default'
import useValidTokenRedirect from '@/hooks/useValidationRedirect'
import { Spin } from 'antd'

import React from 'react'

const Home: React.FC = () => {
  return (
    <Spin spinning={useValidTokenRedirect('/')}>
      <DefaultLayout>
        <div className='font-poppins flex items-center  justify-center px-2 py-20'>
          <Landing />
        </div>
      </DefaultLayout>
    </Spin>
  )
}
export default Home
