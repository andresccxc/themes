import { ActionKeys, CartActions } from './types';
const { SET_CART } = ActionKeys;

interface CartState {
    productsNumber: number;
};

const initialState: CartState = {
    productsNumber: 0,
};

export const reducer = (state: CartState = initialState, { type, payload }: CartActions): CartState => {
    switch (type) {

        case SET_CART:
            return {
                ...state,
                productsNumber: payload
            };

        default: return state;
    }
};