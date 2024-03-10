import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getShops= createAsyncThunk(
    'shop/getShops', 
      async () =>{
    const {data} = await axios.get('https://65ce2c1fc715428e8b401f4e.mockapi.io/3/name');
     return data;
})

const shopSlice = createSlice({
    name:'shop',
    initialState:{
        products: [],
        loading: false,
        err:""
    },
    extraReducers:(builder) => {
        builder
        .addCase(getShops.pending , (state)=>{
            state.loading = true;
        })
        .addCase(getShops.fulfilled,(state,{payload})=>{
            state.loading= false
            state.products = payload
        })
        .addCase(getShops.rejected, (state, {payload}) =>{
            state.loading=false
            state.err=payload
        })
    }
})



export default shopSlice.reducer;