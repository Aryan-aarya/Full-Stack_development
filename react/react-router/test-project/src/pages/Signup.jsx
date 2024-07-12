import React from 'react';
import Template from '../components/Template';
import signupImg from '../assets/signup.png';

const Signup = ({ setIsLoggedIn }) => {
  return (
    <Template 
    title="Join the millions learning to code with StudyNotion for free"
    desc1="Build skill for today,tommorow,and beyond"
    desc2="Education to future-proof you career."
    image={signupImg}
    formType="signup"
    setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup