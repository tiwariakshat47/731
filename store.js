import { configureStore } from "@reduxjs/toolkit";
//called navReducer from navSlice
import navReducer from "./slices/navSlice";

//Data layer configured
export const store = configureStore({
    reducer: {
        nav: navReducer,
    },
});