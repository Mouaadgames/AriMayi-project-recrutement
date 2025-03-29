import { configureStore, combineReducers } from '@reduxjs/toolkit'
//to make data persist when refresh
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import candidateSlice from './state/candidates/candidatesSlice'
import jobSlice from './state/jobs/jobSlice'

// Persist configuration
const persistConfig = {
  key: 'persist',
  storage,
};

const persistedReducer = persistReducer(persistConfig, candidateSlice);
const rootReducer = combineReducers({
  candidates: candidateSlice,
  jobs: jobSlice
})
const makeConfiguredStore = () =>
 configureStore({
  reducer: rootReducer
})

export const makeStore = () => {
  const isServer = typeof window === 'undefined'
  if (isServer) {
    return makeConfiguredStore()
  } else {
    const persistedReducer = persistReducer(persistConfig, rootReducer)
    let store: any = configureStore({
      reducer: persistedReducer,
    })
    store.__persistor = persistStore(store)
    return store
  }
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']