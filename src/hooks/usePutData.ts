import { useState } from 'react'
import checkToken from '@/utils/functions/checkToken'

interface FetchStateTypes {
  loading: boolean
  data: any
}

interface UsePutDataReturnType {
  loading: boolean
  data: any
  handlePutRequest: (variables?: Filter) => Promise<any>
}

type Filter = Record<string, unknown>

export default function usePutData (endpoint: string): UsePutDataReturnType {
  const [fetchStates, setFetchedStates] = useState<FetchStateTypes>({
    loading: false,
    data: null
  })

  async function handlePutRequest (variables?: Filter): Promise<any> {
    setFetchedStates((prev) => {
      return {
        ...prev,
        loading: true
      }
    })

    const filter: Filter = variables ?? {}
    const token = checkToken()
    console.log('Token:', token)
    console.log('Endpoint:', endpoint)
    try {
      const response = await fetch(endpoint, {
        method: 'PUT',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token ?? ''}`
        },
        body: JSON.stringify(filter)
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setFetchedStates({
        loading: false,
        data
      })
    } catch (error) {
      console.error('There was an error with the fetch operation: ', error)
    }
  }
  return { ...fetchStates, handlePutRequest }
}
