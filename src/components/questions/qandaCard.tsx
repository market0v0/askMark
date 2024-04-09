import React from 'react'
import Image from 'next/image'

interface QuestionProps {
  question: string
  message: string
}

const QandACarD: React.FC<QuestionProps> = ({ question, message }) => {
  return (
    <div className='font-poppins rounded-2xl p-2 flex lg:flex-row flex-col bg-[#8062B0]  '>

      <div className='flex lg:w-[80%] pt-2  items-center '>
        <div className='relative h-[3rem] sm:w-[4rem] w-[8rem]'>
          <Image src={'/q.svg'} fill alt='marked' />
        </div>
        <span className='px-4'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et ?
        </span>
      </div>
      <div className='flex w-[20%]  justify-center items-center  '>
        <button className='w-[2rem] h-[2rem] rounded-2xl bg-black p-4 font-bold'></button>
      </div>

    </div>

  )
}

export default QandACarD
