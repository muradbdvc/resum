import { useState } from 'react'
import './App.css'
import Resume from './components/Resume'
import Navmenu from './components/Navmenu/Navmenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navmenu />
      <Resume />
    </>
  )
}

export default App
