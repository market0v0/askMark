import React, { useState } from 'react'
import PrimaryBtn from '../inputs/primaryBtn'
import SecondaryBtn from '../inputs/secondary'
import QandACarD from './qandaCard'
import { type Question } from '@/handlers'
import CustomModal from '../modal'
import GeneratedLink from '../link/generatedlink'

interface QFormProps {
  questions: Question[]
}

const QForm: React.FC<QFormProps> = ({ questions }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <div className='font-poppins flex max-h-[70vh] w-[95%] min-w-[80vw] flex-col items-center justify-start gap-4 rounded-[1rem] border-2 border-[#00000009] bg-[#9985DB] py-2 pb-4 text-white drop-shadow-lg md:w-[80%] md:min-w-[40rem]'>
      <div className='flex w-[98%] flex-col justify-between gap-2 pt-2 lg:flex-row lg:items-center'>
        <SecondaryBtn execute={function (): void {}} label={'UNANSWERED'} />
        <CustomModal
          visible={isModalVisible}
          onClose={() => {
            setIsModalVisible(!isModalVisible)
          }}
        >
          <GeneratedLink />
        </CustomModal>
        <PrimaryBtn execute={() => {
          setIsModalVisible(!isModalVisible)
        }} label={'GENERATE LINK'} />
      </div>

      <div className='flex w-full flex-col overflow-y-auto'>
        {questions?.length === 0 ? (
          <div className='text-center'>
            <span>No Questions Yet</span>
          </div>
        ) : (
          <div className='flex flex-col gap-2 px-[1rem] lg:px-[2rem]'>
            {questions?.map((question, index) => (
              <QandACarD
                key={index}
                question={question.question}
                message={question.answer}
                id={question.questionId}
                status={question.status}
                answer={question.answer}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default QForm
