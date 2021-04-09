import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from "../rootReducer";
import { ActionKeys, SetThemes, SetTheme, SetError, ThemesActions } from './types';
const { SET_THEMES, SET_THEME, SET_ERROR } = ActionKeys;



export const setThemes = (themes: any): ThunkAction<Promise<void>, RootState, {}, ThemesActions> => {
    return async (dispatch: ThunkDispatch<RootState, {}, ThemesActions>) => {
        dispatch(setThemesAction(themes));
    }
};

export const setTheme = (theme: string): ThunkAction<Promise<void>, RootState, {}, ThemesActions> => {
    return async (dispatch: ThunkDispatch<RootState, {}, ThemesActions>) => {
        dispatch(setCurrentTheme(theme));
    }
};

export const setThemesAction = (themes: any): SetThemes => ({
    type: SET_THEMES,
    payload: themes
});
export const setCurrentTheme = (theme: string): SetTheme => ({
    type: SET_THEME,
    payload: theme
});
export const setError = (error: string): SetError => ({
    type: SET_ERROR,
    payload: error,
});