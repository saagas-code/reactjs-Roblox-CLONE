import {configureStore} from '@reduxjs/toolkit'
import infoReducers from './reducers/infoReducers'
import registerReducer from './reducers/registerReducer'



export const store = configureStore({
    reducer: {
        infos:infoReducers,
        register:registerReducer
    }
})

export type RootState = ReturnType<typeof store.getState>