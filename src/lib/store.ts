import { configureStore } from '@reduxjs/toolkit'
import candidateSlice from './state/candidates/candidatesSlice'
import jobSlice from './state/jobs/jobSlice'

export const Store = configureStore({
  reducer: {
    candidates: candidateSlice,
    jobs: jobSlice
  }
})
