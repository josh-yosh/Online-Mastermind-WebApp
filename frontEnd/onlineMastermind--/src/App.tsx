import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PlayButton from './components/menu/playButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <PlayButton/>
      </div>
    </>
  )
}

export default App
