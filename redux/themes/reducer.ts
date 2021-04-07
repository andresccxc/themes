import { ActionKeys, ThemesActions } from './types';
const { SET_THEME, SET_ERROR } = ActionKeys;
interface ThemesState {
    theme: any;
    error: string;
};

const initialState: ThemesState = {
    theme: 'dark',
    error: ''
};

export const reducer = (state: ThemesState = initialState, { type, payload }: ThemesActions): ThemesState => {
    switch (type) {

        case SET_THEME:
            return {
                ...state,
                theme: payload
            };
        case SET_ERROR:
            return {
                ...state,
                error: payload
            };

        default: return state;
    }
};