import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "./MovieSlice";

const store=configureStore({
    reducer:{MovieRed:MovieReducer}
})

export default store