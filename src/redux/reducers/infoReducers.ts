import { createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'infos',
    initialState: {
        name:'',
        link:'',
        img:'',
        like:'',
        players:''
        
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setLink: (state, action) => {
            state.link = action.payload;
        },
        setImg: (state, action) => {
            state.img = action.payload;
        },
        setLike: (state, action) => {
            state.like = action.payload;
        },
        setPlayers: (state, action) => {
            state.players = action.payload;
        }

    }
})

export const {setName, setImg, setLike, setPlayers, setLink} = slice.actions;
export default slice.reducer; 