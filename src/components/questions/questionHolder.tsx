/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import PrimaryBtn from '../inputs/primaryBtn'
import QandACarD from './qandaCard'
import { type Question } from '@/handlers'
import CustomModal from '../modal'
import GeneratedLink from '../link/generatedlink'
import { Pagination } from 'antd'
import MyPopover from '../popover'

interface QFormProps {
  questions: Question[]
}

const QForm: React.FC<QFormProps> = ({ questions }) => {
  const [popoverOpen, setPopoverOpen] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [filter, setFilter] = useState('all')
  const questionsPerPage = 10

  let filteredQuestions = questions
  if (filter === 'Answered') {
    filteredQuestions = questions.filter(question => question?.status)
  } else if (filter === 'Unanswered') {
    filteredQuestions = questions.filter(question => !(question?.status))
  }

  // Calculate the questions for the current page
  const indexOfLastQuestion = currentPage * questionsPerPage
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage
  const currentQuestions = filteredQuestions?.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  )

  const paginate = (pageNumber: number): any => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className='font-poppins flex max-h-[70vh] w-[80vw] flex-col items-center justify-center gap-4 rounded-[1rem] border-2 border-[#00000009] bg-[#9985DB] py-2 pb-4 text-white drop-shadow-lg md:w-[80%] md:min-w-[40rem]'>
      <div className='flex w-[98%] flex-col justify-between gap-2 pt-2 lg:flex-row lg:items-center'>
        <MyPopover open={popoverOpen} setOpen={setPopoverOpen}>
          {[
            <button onClick={() => { setPopoverOpen(!popoverOpen) }} className='rounded-xl bg-[#000000] px-16 py-2 text-[.8rem] hover:bg-slate-600'>
              {`Filter: ${filter}`}
            </button>,
            <div className='flex flex-col gap-2 text-white rounded-lg bg-[#8878be] p-2 '>
               <button className='w-full rounded-2xl bg-black p-2 text-[.8rem] hover:bg-gray-700 px-4' onClick={() => { setFilter('Answered'); setPopoverOpen(!popoverOpen) }}>Answered</button>
               <button className='w-full rounded-2xl bg-black p-2 text-[.8rem] hover:bg-gray-700 px-4' onClick={() => { setFilter('Unanswered'); setPopoverOpen(!popoverOpen) }}>Unanswered</button>
               <button className='w-full rounded-2xl bg-black p-2 text-[.8rem] hover:bg-gray-700 px-4' onClick={() => { setFilter('All'); setPopoverOpen(!popoverOpen) }}>All</button>
             </div>
          ]}
        </MyPopover>
        <CustomModal
          visible={isModalVisible}
          onClose={() => {
            setIsModalVisible(!isModalVisible)
          }}
        >
          <GeneratedLink />
        </CustomModal>
        <PrimaryBtn
          execute={() => {
            setIsModalVisible(!isModalVisible)
          }}
          label={'GENERATE LINK'}
        />
      </div>

      <div className='qform flex w-full flex-col overflow-y-auto'>
        {currentQuestions?.length === 0 ? (
          <div className='text-center'>
            <span>No Questions Yet</span>
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center  gap-2 px-[1rem] pt-4 lg:px-[2rem]'>
            {currentQuestions?.map((question, index) => (
              <QandACarD
                key={index}
                question={question.question}
                message={question.answer}
                id={question.questionId}
                status={question.status}
                answer={question.answer}
                date={question.createdDate}
              />
            ))}
          </div>
        )}
      </div>

      <Pagination
        current={currentPage}
        total={filteredQuestions?.length}
        pageSize={questionsPerPage}
        onChange={paginate}
      />
    </div>
  )
}

export default QForm
