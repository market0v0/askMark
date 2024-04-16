// handlers.ts
export const onQuestionChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setQuestion: React.Dispatch<React.SetStateAction<string>>,
  MAX_QUESTION_LENGTH: number
): void => {
  const value = e.target.value
  if (value.length <= MAX_QUESTION_LENGTH) {
    setQuestion(value)
  }
}

export const onAnswerChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setAnswer: React.Dispatch<React.SetStateAction<string>>,
  MAX_QUESTION_LENGTH: number
): void => {
  const value = e.target.value
  if (value.length <= MAX_QUESTION_LENGTH) {
    setAnswer(value)
  }
}

export const onAskChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setQuestion: React.Dispatch<React.SetStateAction<string>>,
  MAX_QUESTION_LENGTH: number
): void => {
  const value = e.target.value
  if (value.length <= MAX_QUESTION_LENGTH) {
    setQuestion(value)
  }
}

export interface Question {
  answer: string
  createdDate: string
  question: string
  questionId: string
  status: boolean
}

export const onMessage1Change = (
  e: React.ChangeEvent<HTMLInputElement>,
  setMessage1: React.Dispatch<React.SetStateAction<string>>,
  MAX_MESSAGE_LENGTH: number
): void => {
  const value = e.target.value
  if (value.length <= MAX_MESSAGE_LENGTH) {
    setMessage1(value)
  }
}

export const onMessage2Change = (
  e: React.ChangeEvent<HTMLInputElement>,
  setMessage2: React.Dispatch<React.SetStateAction<string>>,
  MAX_MESSAGE_LENGTH: number
): void => {
  const value = e.target.value
  if (value.length <= MAX_MESSAGE_LENGTH) {
    setMessage2(value)
  }
}
