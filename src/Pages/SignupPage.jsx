import React from 'react'
import FormTemplate from '../Components/Core/FormTemplate'
import SignupImg from "../assets/Images/signup.webp"

const SignupPage = () => {
  return (
    <div>
      <FormTemplate
        title="Join the millions learning to code with StudyNotion for free"
        description1="Build skills for today, tomorrow, and beyond."
        description2="Education to future-proof your career."
        img={SignupImg}
        type="signup"
      />
    </div>
  )
}

export default SignupPage
