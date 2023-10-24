import React, { useState } from 'react'
import {Header, About, SongsFunction, Nav, Home, Albums} from './components'
import {Routes, Route} from 'react-router-dom'
import './assets/css/App.css'
import { ThemeProvider, useTheme, useThemeUpdate } from './components/Theme/themeProvider'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faTwitter, faFontAwesome)






function App() {
  const darkTheme = useTheme()
  const rootClassName = darkTheme? "dark-theme" :"light"
  const toggleTheme = useThemeUpdate();

  return (
    <>
    <ThemeProvider>
      <div className="App">
      {/* all the routes */}
        <Routes>
          {/* all routes from main */}
          <Route path='/' element = {<Nav/>}>
            <Route index element ={<Home/>}/>
            <Route path ='about' element={<><Header/><About/></>}/>
            <Route path ='TopSongs' element={<SongsFunction/>}/>
            <Route path ='Albums' element={<Albums/>}/>
            <Route path ='*' element= {<h1>Page Not Found</h1>}/>
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
    </>
  )
}

export default App
