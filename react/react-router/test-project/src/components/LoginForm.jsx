import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  const [showPassword, setShoePassword] = useState(false);
  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged in",{
      autoClose: 1000,
    });
    console.log("printing the form data");
    console.log(formData);
    navigate("/Dashbord");
  }
  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-4 mt-6 text-white"
    >
      <label className="w-full">
        <p className="mb-1 leading-[1.375rem]">
          Email Address<sup className="text-pink-600">*</sup>
        </p>

        <input
          required
          type="text"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter email id"
          name="email"
          className="bg-gray-900 rounded-[0.75rem] w-full p-[12px] "
        />
      </label>
      <label className="w-full relative">
        <p className="mb-1 leading-[1.375rem]">
          passsword<sup className="text-pink-600">*</sup>
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
        <span
          onClick={() => setShoePassword((prev) => !prev)}
          className="absolute right-3 top-[38px]  cursor-pointer "
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>
      </label>

      <Link to="#">
        <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
          Forgot Password
        </p>
      </Link>
      <button className="bg-yellow-400 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-black w-full">
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
