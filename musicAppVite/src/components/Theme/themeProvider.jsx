import React, {useContext, useState, useEffect} from 'react'

const ThemeContext = React.createContext(true)
const ThemeUpdate = React.createContext()

export function useTheme() {
    return useContext(ThemeContext)
}
export function useThemeUpdate() {
    return useContext(ThemeUpdate)
}


export function ThemeProvider({children}){
    const [darkTheme, setDarkTheme] = useState(true)
    
    useEffect(() => {
        document.body.className = darkTheme ? 'dark' : 'light';
      }, [darkTheme]);

    function toggleTheme() {
      setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }
    return(
        <ThemeContext.Provider value={darkTheme}>
           <ThemeUpdate.Provider value= {toggleTheme}>
                <div>{children}</div>
            </ThemeUpdate.Provider>
        </ThemeContext.Provider>
    )
}







