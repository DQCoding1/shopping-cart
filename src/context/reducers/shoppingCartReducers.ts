import { CartItem } from "../../types/CartItem";

const shoppingCartReducers = {
    increaseQuantity: (state: CartItem[], action: any) => {
        const id = action.payload.id;
        const doesTheItemExist = state.find((item) => item.id === id)

        if (doesTheItemExist) {
            const newState = state.map((item) =>
                item.id === id ? { id, quantity: item.quantity++ } : item
            );
            return newState
        } else {
            return [...state, { id, quantity: 1 }];
        }
    },


    decreaseQuantity: (state: CartItem[], action: any) => {
        const id = action.payload.id;
        const doesTheItemExist = state.find((item) => item.id === id)

        if (doesTheItemExist?.quantity !== 1) {
            const newState = state.map((item) =>
                item.id === id ? { id, quantity: item.quantity-- } : item
            );
            return newState
        } else {
            return state.filter((item) => item.id !== id);
        }
    },
};

export default shoppingCartReducers;
