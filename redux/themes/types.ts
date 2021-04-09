export enum ActionKeys {
    SET_THEMES = 'SET_THEMES',
    SET_THEME = 'SET_THEME',
    SET_ERROR = 'SET_ERROR',
};

export interface SetThemes {
    type: ActionKeys.SET_THEMES,
    payload: any
};
export interface SetTheme {
    type: ActionKeys.SET_THEME,
    payload: string
};
export interface SetError {
    type: ActionKeys.SET_ERROR,
    payload: string
};

export type ThemesActions = SetThemes | SetTheme | SetError;