import { useState } from 'react'

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
