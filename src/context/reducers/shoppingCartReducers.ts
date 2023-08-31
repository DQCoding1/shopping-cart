import { PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../types/CartItem";

const shoppingCartReducers = {
    createItem: (state: CartItem[], action: PayloadAction<CartItem>) => {
        return [...state, action.payload];
    },

    increaseQuantity: (state: CartItem[], action: PayloadAction<number>) => {
        const newState = state.map((item) =>
            item.id === action.payload
                ? {
                      ...item,
                      quantity: item.quantity+1,
                  }
                : item
        );        
        return newState;
    },

    decreaseQuantity: (state: CartItem[], action: PayloadAction<number>) => {
        const shoppingCartItem = state.find(
            (item) => item.id === action.payload
        );

        if (shoppingCartItem?.quantity !== 1) {
            const newState = state.map((item) =>
                item.id === action.payload
                    ? {
                          ...item,
                          quantity: item.quantity-1,
                      }
                    : item
            );
            return newState;
        } else {
            return state.filter((item) => item.id !== action.payload);
        }
    },
};

export default shoppingCartReducers;
