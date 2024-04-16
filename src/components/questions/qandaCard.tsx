import React, { useState } from 'react'
import Image from 'next/image'
import CustomModal from '../modal'
import AnswerForm from '../forms/answerForm'

interface QuestionProps {
  question: string
  message: string
  status: boolean
  id: string
  answer: string
}

const QandACarD: React.FC<QuestionProps> = ({ question, message, id, status, answer }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const displayQuestion = question.length > 30 ? question.substring(0, 60) + '...' : question

  const handleOpenModal = (): void => {
    setIsModalVisible(true)
  }

  const handleCloseModal = (): void => {
    setIsModalVisible(false)
  }

  return (
    <div className='font-poppins rounded-2xl p-2 flex lg:flex-row flex-col bg-[#8062B0] justify-between '>
    {/*   <div className='flex lg:w-[80%] py-2 pt-2 items-center'>
        <div className='relative h-[3rem] sm:w-[4rem]  w-[10rem]'>
          <Image src={'/q.svg'} fill alt='marked' />
        </div>
        <span className='px-4'>
          {displayQuestion}
        </span>
      </div> */}
        <div className='grid w-full grid-cols-5 py-2 pt-2 items-center'>
        <div className='relative col-span-1 h-[3rem] w-full'>
          <Image src={'/q.svg'} fill alt='marked' />
        </div>
        <span className='px-4 col-span-4'>
          {displayQuestion}
        </span>
      </div>
      <div className='flex min-w-full md:min-w-[20%]  justify-center items-center  '>
      <button onClick={handleOpenModal} className=' rounded-2xl bg-black p-2 w-full text-[.8rem]'>View Question</button>
        <CustomModal visible={isModalVisible} onClose={handleCloseModal}>
        <AnswerForm question={question} questionId={id} status={status} getanswer={answer} />
        </CustomModal>
      </div>
    </div>
  )
}

export default QandACarD
