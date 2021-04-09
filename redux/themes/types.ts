export enum ActionKeys {
    SET_THEME = 'SET_THEME',
    LOAD_THEME  = 'LOAD_THEME',
    SET_ERROR = 'SET_ERROR',
};

export interface SetTheme {
    type: ActionKeys.SET_THEME,
    payload: any
};

export interface SetError {
    type: ActionKeys.SET_ERROR,
    payload: string
};

export interface LoadTheme {
    type: ActionKeys.LOAD_THEME,
    theme: any
}

export type ThemesActions = SetTheme | LoadTheme | SetError;