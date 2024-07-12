import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const SignUpForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  const [showPassword, setShoePassword] = useState(false);
  const [showPassword2, setShoePassword2] = useState(false);
  const navigate = useNavigate();
  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Account created",{
      autoClose: 1000,
    });
    toast.success("Logged in",{
      autoClose: 1000,
    });
    console.log("printing the form data");
    console.log(formData);
    navigate("/Dashbord");
  }
  return (
    <div>
      <form onSubmit={submitHandler} className="mt-4">
        <div className="flex gap-4">
          <label className="w-full relative">
            <p className="text-[0.875rem] mb-1 leading-[1.375rem]">
              First name<sup className="text-pink-600">*</sup>
            </p>

            <input
              required
              type="text"
              value={formData.firstName}
              onChange={changeHandler}
              placeholder="Enter first name"
              name="firstName"
              className="bg-gray-900 rounded-[0.75rem] w-full p-[12px] "
            />
          </label>

          <label className="w-full relative">
            <p className="text-[0.875rem] mb-1 leading-[1.375rem]">
              Last name<sup className="text-pink-600">*</sup>
            </p>

            <input
              required
              type="text"
              value={formData.lastName}
              onChange={changeHandler}
              placeholder="Enter Last name"
              name="lastName"
              className="bg-gray-900 rounded-[0.75rem] w-full p-[12px] "
            />
          </label>
        </div>
        <label className="w-full relative">
          <p className="text-[0.875rem] mb-1 leading-[1.375rem]">
            Email Address<sup className="text-pink-600">*</sup>
          </p>

          <input
            required
            type="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email id"
            name="email"
            className="bg-gray-900 rounded-[0.75rem] w-full p-[12px] "
          />
        </label>
        <div className="flex gap-4">
          <label className="w-full relative">
            <p className="text-[0.875rem] mb-1 leading-[1.375rem]">
              Create passsword<sup className="text-pink-600">*</sup>
            </p>

            <input
              required
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter password"
              name="password"
              className="bg-gray-900 rounded-[0.75rem] w-full p-[12px] "
            />
            <span onClick={() => setShoePassword((prev) => !prev)}
            className="absolute right-3 top-[38px] cursor-pointer z-10">
              {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
            </span>
          </label>

          <label className="w-full relative">
            <p className="text-[0.875rem] mb-1 leading-[1.375rem]">
              Confirm passsword<sup className="text-pink-600">*</sup>
            </p>
            <input
              required
              type={showPassword2 ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="confirm password"
              name="confirmPassword"
              className="bg-gray-900 rounded-[0.75rem] w-full p-[12px] "
            />
            <span onClick={() => setShoePassword2((prev) => !prev)}
            className="absolute right-3 top-[38px] cursor-pointer z-10">
              {showPassword2 ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye  fontSize={24} fill="#AFB2BF"/>}
            </span>
          </label>
        </div>

        <button className="bg-yellow-400 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-black w-full">Create Account</button>
      </form>
    </div>
  );
};

export default SignUpForm;
