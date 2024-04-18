/* // store.js

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'
import rootReducer from './reducers'
import { type Reducer, createStore } from 'redux'

export const persistConfig = {
  key: 'TOKEN',
  storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer as Reducer<Partial<{ token?: any }>, { type: any, payload: any }>)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)

 */
// store.js

import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'
import rootReducer from './reducers'

export const persistConfig = {
  key: 'TOKEN',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer as any)

export const store = createStore(persistedReducer)

export const persistor = persistStore(store)
