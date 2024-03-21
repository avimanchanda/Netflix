import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice({
    name:"config",
    initialState:{
        language:"en"
    },
    reducers:{
        changeLangauage:(state,action)=>{
            state.language=action.payload
        }
    }
})

export default configSlice.reducer;
export const {changeLangauage}=configSlice.actions;