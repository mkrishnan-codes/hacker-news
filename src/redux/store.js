import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer'
const devTools = process.env.NODE_ENV === 'development';

export const store = configureStore({
    reducer: rootReducer,
    devTools,
    middleware: []
})

