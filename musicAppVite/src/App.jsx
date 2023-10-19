import { useState } from 'react'
import {Header, About, SongsFunction, Nav, Home} from './components'
import {Routes, Route} from 'react-router-dom'
import './assets/css/App.css'


function App() {

  return (
    <>
    <div className="App">
      {/* all the routes */}
      <Routes>
        {/* all routes from main */}
        <Route path='/' element = {<Nav/>}>
          <Route index element ={<Home/>}/>
          <Route path ='about' element={<><Header/><About/></>}/>
          <Route path ='TopSongs' element={<SongsFunction/>}/>
          <Route path ='*' element= {<h1>Page Not Found</h1>}/>
        </Route>
      </Routes>
    </div>
    </>
  )
}

export default App
