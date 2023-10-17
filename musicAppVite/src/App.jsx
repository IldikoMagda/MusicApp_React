import { useState } from 'react'
import {Header, About, SongsFunction} from './components'
import './assets/css/App.css'


function App() {

  return (
    <>
      <div>
        <Header/>  
      </div>
      <div>
        <About/>
      </div>
      <div>
        <SongsFunction/>
      </div> 
    </>
  )
}

export default App
