import React from 'react'

interface SecondaryBtnProps {
  execute: () => void
  label: string
}

const SecondaryBtn: React.FC<SecondaryBtnProps> = ({ execute, label }) => {
  return (
       <button
            className='rounded-xl bg-[#000000] text-[.8rem] px-16 py-2 hover:bg-slate-600'
            onClick={execute}
          >
            {label}
          </button>
  )
}

export default SecondaryBtn
