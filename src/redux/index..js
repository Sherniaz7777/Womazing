import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "./slice/shopSlice";
import shopIdSlice from "./slice/cardSlice";
// import Cart from './../pages/Cart';











const store=configureStore({
    reducer:{
        shops:shopSlice,
        carts:shopIdSlice,
        
    }
})


export default store