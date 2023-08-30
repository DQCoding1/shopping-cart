import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../../types/CartItem";
import shoppingCartReducers from "../reducers/shoppingCartReducers";

const intialState: CartItem[] = [];

const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState: intialState,
    reducers: shoppingCartReducers,
});

export const { increaseQuantity, decreaseQuantity,createItem } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
