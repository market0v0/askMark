import React, { useEffect, useState } from 'react'

interface PrimaryBtnProps {
    execute: () => void;
    label: string;
  }

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({ execute, label}) => {
  return (
       <button
            className='rounded-xl text-[.8rem] bg-[#880AA8] px-16 py-2 hover:bg-slate-600'
            onClick={execute}
          >
            {label}
          </button>
  )
}

export default PrimaryBtn
