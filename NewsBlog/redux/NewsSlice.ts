import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { NewsArticles } from '../src/types'

// Define a type for the slice state
interface NewsFeed {
  latestNews: null | NewsArticles[];
  categoryNews: null | NewsArticles[]
}

// Define the initial state using that type
const initialState: NewsFeed = {
  latestNews: null,
  categoryNews: null
}

export const newsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    storeLatestNews: (state, action: PayloadAction<NewsArticles[]>) => {
      state.latestNews = action.payload
    },
    storeCategoryNews: (state, action: PayloadAction<NewsArticles[]>) => {
        state.categoryNews = action.payload
    }
  },
})

export const { storeCategoryNews, storeLatestNews } = newsSlice.actions
export default newsSlice.reducer
