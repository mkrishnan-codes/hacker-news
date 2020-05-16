import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: 'news',
    initialState: {
        data: [],
        page: 0,
        pages: Number.MAX_VALUE
    },
    reducers: {
        fillNews(state, action) {
            state.data = action.payload.hits;
            state.pages = action.payload.nbPages
        },
        updatePage(state, action) {
            state.page = action.payload
        }

    }
})

const { actions, reducer } = postsSlice
export const { fillNews, updatePage } = actions
export default reducer