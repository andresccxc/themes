import { combineReducers } from 'redux';
import { reducer as themesReducer } from './themes/reducer';
import { reducer as cartReducer } from './cart/reducer';

export const rootReducer = combineReducers({
    theme: themesReducer,
    cart: cartReducer
});
export type RootState = ReturnType<typeof rootReducer>;