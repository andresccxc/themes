import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from "../rootReducer";
import { ActionKeys, SetCart, CartActions } from './types';
const { SET_CART } = ActionKeys;



export const setCart = (productsNumber:number ): ThunkAction<Promise<void>, RootState, {}, CartActions> => {
    return async (dispatch: ThunkDispatch<RootState, {}, CartActions>) => {
        dispatch(setCartAction(productsNumber));
    }
};

export const setCartAction = (productsNumber: number): SetCart => ({
    type: SET_CART,
    payload: productsNumber
});

