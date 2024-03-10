import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




export const getShopId= createAsyncThunk(
    'shopId/getShopId', 
      async (id) =>{
    const {data} = await axios.get('https://65ce2c1fc715428e8b401f4e.mockapi.io/3/name/'+id);
     return data;
})

const shopIdSlice = createSlice({
    name:'shopId',
    initialState:{
        cart: [],
        loading: false,
        err:""
    },
    extraReducers:(builder) => {
        builder
        .addCase(getShopId.pending , (state)=>{
            state.loading = true;
        })
        .addCase(getShopId.fulfilled,(state,{payload})=>{
            state.loading= false
            state.cart = payload
        })
        .addCase(getShopId.rejected, (state, {payload}) =>{
            state.loading=false
            state.err=payload
        })
    }
})

export default shopIdSlice.reducer;