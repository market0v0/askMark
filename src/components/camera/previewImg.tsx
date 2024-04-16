/* import React, { useState } from 'react'
import { useImageContext } from '../context/imageContext'
import PrimaryBtn from '../inputs/primaryBtn'
import SecondaryBtn from '../inputs/secondary'

interface previewProps {
  image: string | null
  closeLabel: string
}

export const Preview: React.FC<previewProps> = ({ image, closeLabel }) => {
  const [selectImg, setSelectImg] = useState<boolean>(false)

  const { setImagePreview } = useImageContext()

  const selectPicture = (): void => {
    setSelectImg(true)
  }
  const retakePicture = (): void => {
    setImagePreview(null)
  }

  return (
    <div className='flex flex-col rounded-2xl bg-slate-50 p-6'>
      <div>
        {(image != null && selectImg) && (
          <img
            src={image}
            alt='Uploaded'
            style={{ maxWidth: '100%' }}
            className='flex min-h-[20rem] w-[30rem] items-center justify-center rounded-lg bg-[#c8c8c8] hover:bg-[#8f8f8f]'
          />
        )}
      </div>
      <div className='flex w-full justify-between text-white'>
        <PrimaryBtn execute={selectPicture} label={'Save'} />
        <SecondaryBtn execute={retakePicture} label={closeLabel} />

      </div>
    </div>
  )
}
 */
