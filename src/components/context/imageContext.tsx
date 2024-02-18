import React, { createContext, useContext, useState, type ReactNode } from 'react'

// Create a context for managing image preview state
interface ImagePreviewContextType {
  imagePreview: string | null
  setImagePreview: React.Dispatch<React.SetStateAction<string | null>>
}

const ImagePreviewContext = createContext<ImagePreviewContextType | undefined>(
  undefined
)

// Create a provider component to wrap your app
export const ImagePreviewProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  return (
    <ImagePreviewContext.Provider value={{ imagePreview, setImagePreview }}>
      {children}
    </ImagePreviewContext.Provider>
  )
}

// Custom hook to easily access the context values
export const useImageContext = (): any => {
  const context = useContext(ImagePreviewContext)
  if (context == null) {
    throw new Error(
      'useImagePreview must be used within an ImagePreviewProvider'
    )
  }
  return context
}
