import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type Candidate = {
  id: number,
  name: string,
  email: string,
  appliedTime: Date,
  jobId: number,
  cvLink: string,
  state: "pending" | "accepted" | "rejected"
}

const initialState: Candidate[] = [{
    id: 1,
    name: 'mouaad el barrik',
    email: 'mouaadelbarrik@gmail.com',
    jobId: 1,
    appliedTime: new Date(),
    cvLink: "/4ba98dfd985.pdf",
    state: "pending"
  }]


const candidatesSlice = createSlice({
  initialState,
  name: "candidates",
  reducers: {
    addCandidate: (state, action: PayloadAction<Candidate>) => {
      state.push(action.payload)
    }
  }
})

export const { addCandidate } = candidatesSlice.actions
export default candidatesSlice.reducer
