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
  e: React.ChangeEvent<HTMLTextAreaElement>,
  setAnswer: React.Dispatch<React.SetStateAction<string>>,
  MAX_QUESTION_LENGTH: number
): void => {
  const value = e.target.value
  if (value.length <= MAX_QUESTION_LENGTH) {
    setAnswer(value)
  }
}

export const onAskChange = (
  e: React.ChangeEvent<HTMLTextAreaElement>,
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

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0') // Months are 0-indexed in JavaScript
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

export function truncateString (str: string, maxLength: number): string {
  return str.length > maxLength ? str.substring(0, maxLength) + '...' : str
}
