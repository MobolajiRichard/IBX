import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface NewsFeed {
  value: number
}

// Define the initial state using that type
const initialState: NewsFeed = {
  value: 0,
}

export const newsSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    }
  },
})

export const { increment  } = newsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default newsSlice.reducer

//df5965de7b3e4ec3a93468fd791777fd