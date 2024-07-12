import React from 'react'
import Template from '../components/Template'
import loginImg from '../assets/login.png'

const Login = ({ setIsLoggedIn }) => {
  return (
    <Template 
    title="Welcome Back"
    desc1="Build skill for today,tommorow,and beyond"
    desc2="Education to future-proof you career."
    image={loginImg}
    formType="Login"
    setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login