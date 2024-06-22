import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./index.css"
import Navbar from './Components/Common/Navbar'
import { NavLink, Routes,Route } from 'react-router-dom'
import Spinner from "./Components/Common/Spinner"


import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import Dashboard from './Pages/Dashboard'

function App() {
  return (
    <>
    <Navbar/>
                               {/* {homepage} */}
    <div className='w-full h-full'>
    </div> 
   
    <Routes>
      <Route path="/" element={<HomePage/>} ></Route>
      <Route path='/login' element={<LoginPage/>}  />
      <Route path='/signup' element={<SignupPage/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
    </>
  )
}

export default App
