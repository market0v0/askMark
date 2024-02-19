import React, { useState } from 'react'
import ImageUploader from './upload'
import { ImagePreviewProvider, useImageContext } from '../context/imageContext'
import CameraComponent from './camera'
import PrimaryBtn from '../inputs/primaryBtn'
import SecondaryBtn from '../inputs/secondary'
import useImageDownload from '@/core/uploadImae/local/imageDownload'

export const LayoutImg: React.FC = () => {
  const { imagePreview, setImagePreview } = useImageContext()
  const [openCam, setOpenCam] = useState<boolean>(false)
  const { downloadImage } = useImageDownload()
  const takePicture = (): void => {
    setOpenCam(!openCam)
    setImagePreview(null)
  }
  const savePicture = (): void => {
    setOpenCam(!openCam)
  }
  const retakePicture = (): void => {
    setImagePreview(null)
  }
  return (
    <div className='flex flex-col rounded-2xl bg-slate-50 p-6'>
      <div>
        {openCam && (
          <div>
            <CameraComponent />
            <div className='flex w-full justify-between text-white'>
              {imagePreview != null && (
                <PrimaryBtn execute={savePicture} label={'Done'} />
              )}
            </div>
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
            className='min-h-auto flex w-[90vw] items-center justify-center rounded-lg bg-[#c8c8c8] hover:bg-[#8f8f8f] md:w-[30rem]'
          />
        )}
      </div>

      {!openCam && (
        <div className='flex flex-col gap-2 pt-2 text-white'>
          <div className='flex w-full justify-between '>
            <PrimaryBtn execute={takePicture} label={'Take a Photo'} />
            {imagePreview != null && (
              <SecondaryBtn execute={retakePicture} label={'Choose anotther'} />
            )}
          </div>
          {imagePreview != null && (
            <button
              className='rounded-xl bg-[#f58338] px-16 py-2 text-[.8rem] hover:bg-slate-600'
              onClick={(): void => { downloadImage(imagePreview) }}
            >
              Save
            </button>
            /*  <PrimaryBtn
              execute={() => downloadImage(imagePreview)}
              label={'Take a Photo'}
            /> */
          )}
        </div>
      )}
      {/*    {(openCam && imagePreview != null) && (
        <div className='flex w-full justify-between text-white'>
          <PrimaryBtn execute={savePicture} label={'Save'} />
          <SecondaryBtn execute={retakePicture} label={'Retake'} />
        </div>
      )} */}
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
