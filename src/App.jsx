import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./index.css"
import Navbar from './Components/Common/Navbar'
import { NavLink, Routes } from 'react-router-dom'


import HomePage from './Pages/HomePage'

function App() {
  return (
    <>
    <Navbar/>
                               {/* {homepage} */}
    <div className='w-full h-full'>
      <HomePage></HomePage>
    </div> 
   
    <Routes>

    </Routes>
    </>
  )
}

export default App
