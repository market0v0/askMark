import { message } from 'antd'
import React from 'react'
import { useImageContext } from '../context/imageContext'
import PrimaryBtn from '../inputs/primaryBtn'

interface ImageUploaderProps {
  onUpload: (image: File) => void
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onUpload }) => {
  const { imagePreview, setImagePreview } = useImageContext()

  const handleDrop = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault()
    const file = event.dataTransfer.files[0]
    handleImage(file)
  }

  const handleImageSelect = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files?.[0]
    if (file != null) {
      handleImage(file)
    }
  }
  const retakePicture = (): void => {
    setImagePreview(null)
  }

  const handleImage = (file: File): any => {
    if (!file.type.includes('image')) {
      void message.error('Please upload an image file (png, jpeg, etc.)')
      return
    }
    if (file.size > 2 * 1024 * 1024) {
      void message.error("'Please upload an image less than 2MB in size'")
      return
    }

    const reader = new FileReader()
    reader.onloadend = () => {
      const imageDataURL = reader.result as string
      setImagePreview(imageDataURL)
      onUpload(file)
    }
    reader.readAsDataURL(file)
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault()
  }

  return (
    <div onDrop={handleDrop} onDragOver={handleDragOver}>
      <input
        type='file'
        accept='image/*'
        onChange={handleImageSelect}
        style={{ display: 'none' }}
        id='imageInput'
      />
      {imagePreview != null || (
        <label
          htmlFor='imageInput'
          className='flex min-h-[20rem] w-[30rem] flex-col items-center justify-center rounded-lg bg-[#c8c8c8] hover:bg-[#8f8f8f]'
        >
          Drag & Drop or Click to Select an Image
          <span className='text-[0.7rem]'>
            File must end with .png or .jpeg and does not exceed 2mb
          </span>
        </label>
      )}
         <label
          htmlFor='imageInput'
          className=''
        >,arl</label>
    </div>
  )
}

export default ImageUploader
