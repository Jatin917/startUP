import { createSlice } from "@reduxjs/toolkit";

export const cityOrHostel = createSlice({
    name:'cityOrHostel',
    initialState:{
        searchQuery: '',
        currentCity:[],
        currentHostel:[],
        page:1,
    },
    reducers:{
        setSearchQuery:(state,action)=>{
            state.searchQuery = action.payload;
        },
        setCurrentCity:(state,action)=>{
            state.currentCity = action.payload;
            state.searchQuery = '';
        },
        setCurrentHostel:(state,action)=>{
            state.searchQuery = '';
            state.currentHostel = action.payload;
        },
    }
});

export const {setSearchQuery, setCurrentCity, setCurrentHostel} = cityOrHostel.actions;
export default cityOrHostel.reducer;