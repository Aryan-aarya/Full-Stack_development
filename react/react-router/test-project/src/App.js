import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashbord from "./pages/Dashbord";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const[isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div className="App w-screen h-screen bg-black flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
       <Route path="/Signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
       <Route path="/Dashbord" element={
        <PrivateRoute isLoggedIn={isLoggedIn}>
        <Dashbord/>
        </PrivateRoute>   
      }/>
      </Routes>
    </div>
  );
}

export default App;
