import React, { useState, useEffect, useRef } from 'react'

interface NavigationProps {
  onButtonClick: () => void
}
const CustomDropdown: React.FC<NavigationProps> = ({ onButtonClick }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen)
  }

  const closeDropdown = (event: MouseEvent): void => {
    if ((dropdownRef.current != null) && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false)
      onButtonClick()
    }
  }

  /*   const handleButtonClick = (): any => {
    setIsOpen(!isOpen)
  } */

  useEffect(() => {
    document.addEventListener('click', closeDropdown)
    return () => {
      document.removeEventListener('click', closeDropdown)
    }
  }, [])

  return (
    <div className='relative h-[30rem]' ref={dropdownRef} >
      <div className='cursor-pointer' onClick={() => {
        toggleDropdown()
        onButtonClick() // Call the callback when a button is clicked
      }}>
        <img src='/hamburger.svg' alt='project' width='20' height='100%' />
      </div>
      {isOpen && (
        <div className=' top-full right-0 bg-black p-2 border border-gray-700 rounded'>
        </div>
      )}
    </div>
  )
}

export default CustomDropdown
