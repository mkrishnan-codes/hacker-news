import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: 'news',
    initialState: {
        data: [],
        page: 0,
        pages: Number.MAX_VALUE,
        likesMap: {}
    },
    reducers: {
        fillNews(state, action) {
            state.data = action.payload.hits;
            state.pages = action.payload.nbPages
        },
        updatePage(state, action) {
            state.page = action.payload
        },
        like(state, action) {
            if (!isNaN(state.likesMap[action.payload])) {
                state.likesMap[action.payload] = state.likesMap[action.payload] + 1
            } else {
                const ind = state.data.findIndex((item) => item.objectID === action.payload);
                state.likesMap[action.payload] = state.data[ind].points + 1
            }
            localStorage.setItem('likesMap', JSON.stringify(state.likesMap))
        },
        restoreLikes(state, action) {
            state.likesMap = action.payload ? action.payload : {}
        }

    }
})

const { actions, reducer } = postsSlice
export const { fillNews, updatePage, like, restoreLikes } = actions
export default reducer