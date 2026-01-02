import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./Reducer";
import { applyMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from '@redux-devtools/extension';
export let Store=configureStore({
    reducer:{
   name:reducer
    }
})