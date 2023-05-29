import { createSlice } from '@reduxjs/toolkit'




const SessionReducer = createSlice({
 name: 'Session',
 initialState:{
    Data:null,
    loading:false,
    error:null,
    Success:false,
 },
 reducers:{}
})