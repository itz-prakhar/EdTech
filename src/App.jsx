import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./index.css"
import Navbar from './Components/Common/Navbar'
import { NavLink, Routes,Route } from 'react-router-dom'
import Spinner from "./Components/Common/Spinner"
import OtpPage from "./Pages/OtpPage"
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import Dashboard from './Pages/Dashboard'
import AboutPage from './Pages/AboutPage'
import ContactUsPage from './Pages/ContactUsPage'
import ProtectedRoute from './Components/Core/Auth/ProtectedRoute'
import MyProfile from './Components/Core/MyProfile'
import Setting from './Components/Core/Setting'
import ConfirmationWindow from './Components/Dashboard/ConfirmationWindow'
import { ACCOUNT_TYPE } from './utils/constants'
import { useSelector } from 'react-redux'
import InstructorDashboard from './Components/Dashboard/InstructorDashboard/InstructorDashboard'
import AddCourse from './Components/Dashboard/AddCourse/AddCourse'
import EditCourse from './Components/Dashboard/EditCourse/EditCourse'
import MyCourse from './Components/Dashboard/MyCourse/MyCourse'
import Cart from './Components/Dashboard/Cart/Cart'
import EnrolledCourse from './Components/Dashboard/EnrolledCourse/EnrolledCourse'

function App() { 
  const {user} = useSelector((state)=>state.user)
  return (
    <>
    <Navbar  />
                               {/* {homepage} */}
    <div className='w-full h-full'>
    </div> 
   
    <Routes>
      <Route path="/" element={<HomePage/>} ></Route>
      <Route path='/login' element={<LoginPage/>}  />
      <Route path='/signup' element={<SignupPage/>} />
      {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
      <Route path='/otp' element={<OtpPage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/contact" element={<ContactUsPage/>} />
      <Route element={<ProtectedRoute><Dashboard/></ProtectedRoute>}>
        <Route path="dashboard/my-profile" element={<MyProfile/>} />
        <Route path="dashboard/setting" element={<Setting/>} />
        {
          user.accountType===ACCOUNT_TYPE.STUDENT &&(
            <>
              <Route path="dashboard/cart" element={<Cart/>} />
              <Route path="dashboard/enrolled-courses" element={<EnrolledCourse/>} />
            </>
          )
        }
        {
          user.accountType===ACCOUNT_TYPE.INSTRUCTOR &&(<>
              <Route path="dashboard/instructor" element={<InstructorDashboard/>} />
              <Route path="dashboard/add-course" element={<AddCourse/>} />
              <Route path="dashboard/my-courses"  element={<MyCourse/>}/>
              <Route path="dashboard/edit-course/:courseId" element={<EditCourse/>} />
          </>)
        }
      </Route>
    </Routes>
    </>
  )
}

export default App
