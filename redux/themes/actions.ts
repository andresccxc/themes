import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from "../rootReducer";
import { ActionKeys, SetTheme, SetError, ThemesActions } from './types';
const { SET_THEME, SET_ERROR } = ActionKeys;



export const setTheme = (theme: any): ThunkAction<Promise<void>, RootState, {}, ThemesActions> => {
    return async (dispatch: ThunkDispatch<RootState, {}, ThemesActions>) => {
        dispatch(setThemeAction(theme));
    }
};


export const setThemeAction = (theme: any): SetTheme => ({
    type: SET_THEME,
    payload: theme
});

export const setError = (error: string): SetError => ({
    type: SET_ERROR,
    payload: error,
});