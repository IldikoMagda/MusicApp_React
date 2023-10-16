import { useState } from 'react'
import Header from './header'
import AboutEminem from './AboutEminem'
import Songs from './MostPopular'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>  
      </div>
      <div>
        <AboutEminem/>
      </div>
      <div>
        <Songs/>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>  
      </div>
      
    </>
  )
}

export default App
