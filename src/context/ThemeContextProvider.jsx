import React, { createContext, useMemo, useState } from "react";

export const ThemeContext = createContext()

function ThemeContextProvider({children}){

    const [theme, setTheme] = useState("light")
    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
    }

    const value = useMemo(() => {
        return {theme, toggleTheme}
    }, [theme])

    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider