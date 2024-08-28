import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BotUI from './components/BotUI'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BotUI/>
    </>
  )
}

export default App
