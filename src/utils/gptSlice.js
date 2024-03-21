import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        movienames:null,
        movieResults:null
    },
    reducers:{
        toogleGptSearchView:(state)=>{
            state.showGptSearch=!state.showGptSearch;
        },
        addGPTMovieResults:(state,action)=>{
            state.movieResults=action.payload
        },
        addGPTMovieNames:(state,action)=>{
            state.movienames=action.payload;

        }
    }
})

export default gptSlice.reducer;
export const {toogleGptSearchView,addGPTMovieResults,addGPTMovieNames}=gptSlice.actions;