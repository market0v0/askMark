import React, { useRef } from 'react'
import Webcam from 'react-webcam'
import { useImageContext } from '../context/imageContext'

const CameraComponent: React.FC = () => {
  const webcamRef = useRef<Webcam>(null)
  const { setImagePreview, imagePreview } = useImageContext()

  const capture = (): void => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot()
      setImagePreview(imageSrc)
    }
  }

  return (
    <div className='items items  rounded-lg bg-slate-600'>
      <div className='h-auto w-[30rem]'>
        {imagePreview == null && (
          <div className='flex flex-col   items-center justify-center'>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat='image/jpeg'
              className='rounded-lg'
            />
            <button
              onClick={capture}
              className=' w-[2rem] rounded-2xl bg-white p-4 font-bold'
            ></button>
          </div>
        )}
      </div>

    </div>
  )
}

export default CameraComponent
