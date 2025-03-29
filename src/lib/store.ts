import { configureStore } from '@reduxjs/toolkit'
import candidateSlice from './state/candidates/candidatesSlice'

export const Store = configureStore({
  reducer: {
    candidate: candidateSlice
  }
})
