import { configureStore } from "@reduxjs/toolkit";
import shoppingCartSlice from "../slice/shoppingCartSlice"
import AsideSlice from "../slice/AsideSlice";

const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartSlice,
    aside: AsideSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store