import { useState } from 'react'
import Header from './header'
import AboutEminem from './AboutEminem'
import './App.css'
import SongsFunction from './MostPopular'


function App() {

  return (
    <>
      <div>
        <Header/>  
      </div>
      <div>
        <AboutEminem/>
      </div>
      <div>
        <SongsFunction/>
      </div> 
    </>
  )
}

export default App
