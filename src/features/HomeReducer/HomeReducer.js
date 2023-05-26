import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to perform the Get User Info API call
export const GetUserInfo = createAsyncThunk('auth/login', async (token) => {
    const response = await axios.get('https://dev.chearful.com/api/v2/get-user', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    console.log(response.data.data)
    return response.data.data
})

const HomeReducer = createSlice({
    name: 'Home',
    initialState: {
        loading: false,
        error: null,
        Success: false,
        UserInfo: null,
    },
    
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetUserInfo.pending, (state) => { // as soon as the user comes to the login screen the the api is called and the state is updated
                state.loading = true;
                state.error = null;
                state.Success = false;

            })
            .addCase(GetUserInfo.fulfilled, (state, action) => { // as soon as the login function is fulfilled the auth state gets updated
                state.UserInfo = action.payload;
                state.loading = false;
                state.error = null;
                state.Success = true;
                
        
    })
    }

})

export default HomeReducer.reducer;
