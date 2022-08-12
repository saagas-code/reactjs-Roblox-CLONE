import { createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'register',
    initialState: {
        username: '',
        password: '',
        email: '',
        day: '',
        month: '',
        year: '',
        gender: ''

    },
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setDay: (state, action) => {
            state.day = action.payload;
        },
        setMonth: (state, action) => {
            state.month = action.payload;
        },
        setYear: (state, action) => {
            state.year = action.payload;
        },
        setGender: (state, action) => {
            state.gender = action.payload;
        }

    }
})

export const {setUsername, setPassword, setDay, setMonth, setYear, setEmail, setGender} = slice.actions;
export default slice.reducer; 