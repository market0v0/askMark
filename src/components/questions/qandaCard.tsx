import React, { useState } from 'react'
import Image from 'next/image'
import CustomModal from '../modal'
import AnswerForm from '../forms/answerForm'
import { formatDate } from '@/handlers'
import { Badge } from 'antd'

interface QuestionProps {
  question: string
  message: string
  status: boolean
  id: string
  answer: string
  date: string
}

const QandACarD: React.FC<QuestionProps> = ({
  question,
  message,
  id,
  status,
  answer,
  date
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [answered, setAnswered] = useState(status)

  const handleFormSubmit = (): void => {
    setAnswered(true)
  }

  const displayQuestion =
    question.length > 30 ? question.substring(0, 40) + '...' : question

  const handleOpenModal = (): void => {
    setIsModalVisible(true)
  }

  const handleCloseModal = (): void => {
    setIsModalVisible(false)
  }

  return (
    <Badge dot={!answered} color='red'>

    <div className='font-poppins flex md:w-[80%] w-[72vw] md:min-w-[35rem] flex-col text-white justify-between rounded-2xl bg-[#8062B0] p-2 lg:flex-row '>
      <div className='grid w-full grid-cols-5 items-center py-2 pt-2'>
        <div className='relative col-span-1 h-[3rem] w-full'>
          <Image src={'/q.svg'} fill alt='marked' />
        </div>
        <span className='col-span-4 w-full break-words px-4 '>
          {displayQuestion}
        </span>
      </div>
      <div className='flex min-w-full flex-col items-center  justify-center md:min-w-[20%]  '>
        <button
          onClick={handleOpenModal}
          className=' w-full rounded-2xl bg-black p-2 text-[.8rem] text-white'
        >
          View Question
        </button>
        <span className='text-[.8rem]'>{formatDate(date)}</span>
      </div>
      <CustomModal visible={isModalVisible} onClose={handleCloseModal}>
        <AnswerForm
          question={question}
          questionId={id}
          status={status}
          getanswer={answer}
          onSubmit={handleFormSubmit}
        />
      </CustomModal>
    </div>
    </Badge>

  )
}

export default QandACarD
