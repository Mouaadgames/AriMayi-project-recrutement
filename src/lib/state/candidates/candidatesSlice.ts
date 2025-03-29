import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type Candidate = {
  id: number,
  name: string,
  email: string,
  appliedTime: number,
  jobId: number,
  cvLink: string,
  state: "pending" | "accepted" | "rejected", // can be used to manege the candidate
  phone: string,
  address: string
}

const initialState: Candidate[] = [{
  id: 1,
  name: 'mouaad el barrik',
  email: 'mouaadelbarrik@gmail.com',
  jobId: 1,
  appliedTime: Date.now(),
  cvLink: "/example.pdf",
  state: "pending",
  phone: "212655000000",
  address: "morocco marrakech"
}]


const candidatesSlice = createSlice({
  initialState,
  name: "candidates",
  reducers: {
    addCandidate: (state, action: PayloadAction<Candidate>) => {
      state.push(action.payload)
      return state
    }
  }
})

export const { addCandidate } = candidatesSlice.actions
export default candidatesSlice.reducer
