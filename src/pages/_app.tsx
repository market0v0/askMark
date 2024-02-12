import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'

import { Provider } from 'react-redux'
import { store, persistor } from '../core/redux/store'
import { PersistGate } from 'redux-persist/integration/react'

const App: any = ({ Component, pageProps }: AppProps) => {
  return (
  <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
<Component {...pageProps} />
</PersistGate>
  </Provider>)
}

export default App
