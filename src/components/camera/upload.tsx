import { message } from 'antd'
import React, { useRef } from 'react'
import { useImageContext } from '../context/imageContext'




const ImageUploader: React.FC = ({}) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
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

  const handleImage = (file: File): any => {
    if (!file.type.includes('image/png') && !file.type.includes('image/jpeg')) {
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
        ref={fileInputRef}
      />
       {imagePreview != null || (
      <button
         className='flex min-h-[20rem] md:w-[30rem] w-[87vw] flex-col items-center justify-center rounded-lg bg-[#c8c8c8] hover:bg-[#8f8f8f]'
        onClick={() => {
          if (fileInputRef.current != null) {
            fileInputRef.current.click()
          }
        }}
      >
        Drag & Drop or Click to Select an Image
      </button>
       )}
    </div>
  )
}

export default ImageUploader
