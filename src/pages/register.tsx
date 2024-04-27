import DefaultLayout from '@/components/layout/default'
import RegisterForm from '@/components/forms/registerForm'
import React from 'react'
import useValidTokenRedirect from '@/hooks/useValidationRedirect'
import { Spin } from 'antd'

const Register: React.FC = () => {
  return (
    <Spin spinning={useValidTokenRedirect('/register')}>
      <DefaultLayout>
        <div className='font-poppins flex items-center  justify-center px-2 py-20'>
          <RegisterForm />
        </div>
      </DefaultLayout>
    </Spin>
  )
}

export default Register
