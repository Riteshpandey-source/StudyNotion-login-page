import {  Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from"./Components/Navbar"
import Home from "./Pages/Home";
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Dashboard from "./Pages/Dashboard"
import { useState } from "react"
import PrivateRoute from "./Components/PrivateRoute";



function App() {

  const [isLoggedIn,setIsLoggedIn]=useState(false);

  
  return (
  <div className="w-screen h-screen bg-richblack-900 flex flex-col">
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
     



    <Routes>
      <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>}></Route>
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}  />}/>
      <Route path="/Signup" element={<Signup setIsLoggedIn={setIsLoggedIn}  />}/>
      <Route path="/dashboard" element={
        <PrivateRoute isLoggedIn={isLoggedIn}>
          <Dashboard/>
        </PrivateRoute>
      }/>

        
    </Routes>




        </div>
  )
}

export default App;
