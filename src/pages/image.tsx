import ImageLayout from '@/components/camera/layout'
import DefaultLayout from '@/components/layout/default'
import React from 'react'

const ImageandFile: React.FC = () => {
  return (
    <DefaultLayout>
      <div className='font-poppins px-2 flex min-h-[100vh] items-center justify-center bg-gradient-to-br'><ImageLayout/></div>
      </DefaultLayout>

  )
}

export default ImageandFile
