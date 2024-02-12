// ExampleComponent.js
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setToken } from './action'

const ExampleComponent = (): any => {
  const dispatch = useDispatch()
  const token = useSelector((state: { token: any }) => state.token)
  const [tokentest, setTokentest] = useState('')
  const handleLogin = (): void => {
    const token = tokentest
    dispatch(setToken(token))
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div className='flex w-full flex-col gap-2 px-10'>
        <input
          type='password'
          placeholder={'Password'}
          className='w-full rounded-md px-2 py-2 text-sm text-black'
          value={tokentest}
          onChange={(e) => {
            setTokentest(e.target.value)
          }}
        />
      </div>
      <div className='text-white'>
      <div>Token: {token}</div>
      </div>

    </div>
  )
}

export default ExampleComponent
