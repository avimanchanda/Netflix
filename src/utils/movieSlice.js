import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowplayingmovies:null,
        trailerVideos:null,
        popularmovies:null,
        upcomingmovies:null,
        topratedmovies:null
    },
    reducers:{
        addnowPlayingMovies:(state,action)=>{
            state.nowplayingmovies=action.payload
        },
        addTrailerVideos:(state,action)=>{
            state.trailerVideos=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularmovies=action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingmovies=action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topratedmovies=action.payload
        },
    }
})

export const {addnowPlayingMovies,addTrailerVideos,addPopularMovies,addUpcomingMovies,addTopRatedMovies}=movieSlice.actions;

export default movieSlice.reducer;
