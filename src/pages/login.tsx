import DefaultLayout from '@/components/layout/default'
import LoginForm from '@/components/loginForm'
import React from 'react'

const Login: React.FC = () => {
  return (
    <DefaultLayout>
      <div className='font-poppins px-2 flex min-h-[100vh] items-center justify-center bg-gradient-to-br'><LoginForm /></div>
      </DefaultLayout>

  )
}

export default Login
