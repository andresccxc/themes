import { ActionKeys, ThemesActions } from './types';
const { SET_THEMES, SET_THEME, SET_ERROR } = ActionKeys;

interface ThemesState {
    themes: any;
    currentTheme: string;
    error: string;
};

const initialState: ThemesState = {
    themes: {},
    currentTheme: 'theme2',
    error: ''
};

export const reducer = (state: ThemesState = initialState, { type, payload }: ThemesActions): ThemesState => {
    switch (type) {

        case SET_THEMES:
            return {
                ...state,
                themes: payload
            };
        case SET_THEME:
            return {
                ...state,
                currentTheme: payload
            };
        case SET_ERROR:
            return {
                ...state,
                error: payload
            };

        default: return state;
    }
};