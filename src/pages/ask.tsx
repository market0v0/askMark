import DefaultLayout from '@/components/layout/default'
import React from 'react'
import AskForm from '@/components/forms/askForm'

const Register: React.FC = () => {
  return (
  <DefaultLayout>
  <div className='font-poppins px-2 flex  items-center justify-center py-20'><AskForm/></div>
  </DefaultLayout>
  )
}

export default Register
