export enum ActionKeys {
    SET_CART = 'SET_CART',
};

export interface SetCart {
    type: ActionKeys.SET_CART,
    payload: any
};



export type CartActions = SetCart;