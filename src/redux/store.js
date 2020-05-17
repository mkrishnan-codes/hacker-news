import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer'
const devTools = process.env.NODE_ENV === 'development';

export const configureStoreWithPrestate = (preState) => {
    return configureStore({
        reducer: rootReducer,
        devTools,
        middleware: [],
        preState
    })
}
let initialState;
if (typeof window !== 'undefined') {
    initialState = window.__PRELOADED_STATE__;
    // delete window.__PRELOADED_STATE__
}
export const store = configureStoreWithPrestate(initialState)

