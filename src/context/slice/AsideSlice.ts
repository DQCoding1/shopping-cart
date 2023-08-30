import { createSlice } from "@reduxjs/toolkit";
import AsideReducers from "../reducers/AsideReducers";

const initialState:boolean = false

const AsideSlice = createSlice({
    name: "aside",
    initialState,
    reducers: AsideReducers
})

export const {showAside, hideAside} = AsideSlice.actions
export default AsideSlice.reducer