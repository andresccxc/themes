export enum ActionKeys {
    SET_THEME = 'SET_THEME',
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

export type ThemesActions = SetTheme | SetError;