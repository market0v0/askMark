import checkToken from '@/utils/functions/checkToken'
import router from 'next/router'
import { useEffect, useState } from 'react'

interface fetchStateTypes {
  loading: boolean
  data: unknown
}

type useLazyFetchReturnType = [() => Promise<any>, fetchStateTypes]

export default function useLazyFetchData (
  endpoint: string
): useLazyFetchReturnType {
  const [fetchStates, setFetchedStates] = useState<fetchStateTypes>({
    loading: false,
    data: null
  })

  useEffect(() => {
    setFetchedStates((prev) => {
      return {
        ...prev,
        loading: true
      }
    })
  }, [])

  async function lazyFetch (): Promise<any> {
    setFetchedStates({
      ...fetchStates,
      loading: true
    })

    try {
      const res = await fetch(endpoint, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${checkToken() ?? ''}`
        }
      })
      const retrivedData = await res.json()
      setFetchedStates({
        data: retrivedData,
        loading: false
      })
      return retrivedData
    } catch (error: any) {
      void router.replace('/')
    }
  }

  return [lazyFetch, fetchStates]
}
