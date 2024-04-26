import DefaultLayout from '@/components/layout/default'
import RegisterForm from '@/components/forms/registerForm'
import React from 'react'
import useValidTokenRedirect from '@/hooks/useValidationRedirect'
import { Spin } from 'antd'

const Register: React.FC = () => {
  return (
    <DefaultLayout>
      <Spin spinning={useValidTokenRedirect('/register')}>
        <div className='font-poppins flex items-center  justify-center px-2 py-20'>
          <RegisterForm />
        </div>
      </Spin>
    </DefaultLayout>
  )
}

export default Register
