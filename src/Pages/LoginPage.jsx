import React from 'react'
import FormTemplate from '../Components/Core/FormTemplate'
import LoginImg from "../assets/Images/login.webp"

const LoginPage = () => {
  return (
    <div>
      <FormTemplate
        title="Welcome Back"
        description1="Build skills for today, tomorrow, and beyond."
        description2="Education to future-proof your career."
        img={LoginImg}
        type="login"
      />
    </div>
  )
}

export default LoginPage
