import {configureStore} from "@reduxjs/toolkit";
import articles from "./slices/slices"
import article from "./slices/slice"

export const store = configureStore({
    reducer: {
        articles,
        article
    }
})