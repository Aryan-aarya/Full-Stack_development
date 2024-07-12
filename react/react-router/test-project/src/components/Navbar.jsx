import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <img alt="Logo" src={logo} width={160} height={32} loading="lazy" />
      </Link>
      <nav>
        <ul className="flex gap-x-6 text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-x-4">
        {!isLoggedIn && (
          <Link to="/Login">
            <button className="bg-gray-900 text-white py-[8px] px-[12px] rounded-[8px] border border-gray-700">
              Login
            </button>
          </Link>
        )}

        {!isLoggedIn && (
          <Link to="/Signup">
            <button className="bg-gray-900 text-white py-[8px] px-[12px] rounded-[8px] border border-gray-700">
              Signup
            </button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/">
            <button
              className="bg-gray-900 text-white py-[8px] px-[12px] rounded-[8px] border border-gray-700"
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Loged Out",{
                  autoClose: 1000,
                });
              }}
            >
              Logout
            </button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/Dashbord">
            <button className="bg-gray-900 text-white py-[8px] px-[12px] rounded-[8px] border border-gray-700">
              Dashbord
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
