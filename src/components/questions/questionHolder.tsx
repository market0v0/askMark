import React from 'react'
import PrimaryBtn from '../inputs/primaryBtn'
import SecondaryBtn from '../inputs/secondary'
import QandACarD from './qandaCard'

const QForm: React.FC = () => {
  return (
    <div className='font-poppins flex  min-h-full max-h-[40rem] w-[95%] flex-col justify-start items-center  gap-4 rounded-[1rem] border-2 border-[#00000009] bg-[#9985DB] py-2 pb-4  text-white drop-shadow-lg md:w-[80%]'>
      <div className='flex pt-2 lg:flex-row flex-col gap-2 w-[98%] lg:items-center justify-between'>
        <div className='flex lg:flex-row flex-col gap-2'>
          <SecondaryBtn execute={function (): void {
          }} label={'UNANSWERED'} />
          <SecondaryBtn execute={function (): void {
          }} label={'DATE CREATED'} />
        </div>

        <PrimaryBtn execute={function (): void {
        }} label={'GENERATE LINK'} />
      </div>

      <div className='overflow-y-auto  w-full flex flex-col'>
        <div className=' flex flex-col lg:px-[2rem] px-[1rem]  gap-2'>
          <QandACarD question={''} message={''} />
          <QandACarD question={''} message={''} />
          <QandACarD question={''} message={''} />
          <QandACarD question={''} message={''} />
          <QandACarD question={''} message={''} />
          <QandACarD question={''} message={''} />

        </div>
      </div>
    </div>

  )
}

export default QForm
