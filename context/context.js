import React, { useState, createContext } from 'react';

export const AppContext = createContext();

const AppProvider = (props) => {
    const [theme, setTheme] = useState(null);
    return (
        <AppContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppProvider;
