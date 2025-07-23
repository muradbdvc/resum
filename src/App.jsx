import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from './components/Resume'
import Navmenu from './components/Navmenu/Navmenu'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navmenu />
    
    </BrowserRouter>
      <Resume />
    </>
  )
}

export default App
