import React, { useState } from 'react'
import ImageUploader from './upload'
import { ImagePreviewProvider, useImageContext } from '../context/imageContext'
import CameraComponent from './camera'
import PrimaryBtn from '../inputs/primaryBtn'
import SecondaryBtn from '../inputs/secondary'

export const LayoutImg: React.FC = () => {
  const { imagePreview, setImagePreview } = useImageContext()
  const [openCam, setOpenCam] = useState<boolean>(false)

  const takePicture = (): void => {
    setOpenCam(!openCam)
    setImagePreview(null)
  }
  const savePicture = (): void => {
    setOpenCam(!openCam)
  }
  const retakePicture = (): void => {
    setOpenCam(true)
    setImagePreview(null)
  }
  return (
    <div className='flex flex-col rounded-2xl bg-slate-50 p-6'>
      <div>
        {openCam && (
          <div>
            <div onClick={takePicture}>Upload a photo </div>
            <CameraComponent />
          </div>
        )}
        {!openCam && (
          <div>
            <ImageUploader onUpload={function (image: File): void {}} />
          </div>
        )}
        {imagePreview != null && (
          <img
            src={imagePreview}
            alt='Uploaded'
            style={{ maxWidth: '100%' }}
            className='flex min-h-[20rem] w-[30rem] items-center justify-center rounded-lg bg-[#c8c8c8] hover:bg-[#8f8f8f]'
          />
        )}
      </div>
      {!openCam && (
        <div className='flex w-full justify-between text-white'>
          <PrimaryBtn execute={takePicture} label={'Take a Photo'} />s{' '}
        </div>
      )}
      {(openCam && imagePreview != null) && (
        <div className='flex w-full justify-between text-white'>
          <PrimaryBtn execute={savePicture} label={'Save'} />
          <SecondaryBtn execute={retakePicture} label={'Retake'} />
        </div>
      )}
    </div>
  )
}

const ImageLayout: React.FC = () => {
  return (
    <ImagePreviewProvider>
      <LayoutImg />
    </ImagePreviewProvider>
  )
}

export default ImageLayout
