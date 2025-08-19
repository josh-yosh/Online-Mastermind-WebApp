import { useState } from 'react'
import RoundedBox from './components/widget'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <RoundedBox/>
      </div>
    </>
  )
}

export default App
