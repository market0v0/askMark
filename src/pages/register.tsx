import DefaultLayout from '@/components/layout/default'
import RegisterForm from '@/components/forms/registerForm'
import React from 'react'

const Register: React.FC = () => {
  return (
  <DefaultLayout>
  <div className='font-poppins px-2 flex  items-center justify-center py-20'><RegisterForm/></div>
  </DefaultLayout>
  )
}

export default Register
