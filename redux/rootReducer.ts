import { combineReducers } from 'redux';
import { reducer as themesReducer } from './themes/reducer';

export const rootReducer = combineReducers({
    theme: themesReducer
});
export type RootState = ReturnType<typeof rootReducer>;