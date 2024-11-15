import React, { useState } from "react";
import{AiOutlineEye,AiOutlineEyeInvisible} from"react-icons/ai";
import {Link, useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

const Loginform=({setIsLoggedIn})=>{

    const navigate=useNavigate();

    const[formdata,setformdata]=useState({
        email:"",password:""
    })
    const[showpassword,setshowpassword]=useState(false);

    function changehandler(event){

        setformdata((prevdata)=>(
            {
                ...prevdata,
                [event.target.name]:event.target.value
            }
        )
        )

    }
    
    function submithandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }
    return (
        <form onSubmit={submithandler}
        className="flex flex-col w-full gap-y-4 mt-6">
            <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Email address<sup className="text-pink-200">*</sup>
                </p>
                <input
                required
                type="email"
                value={formdata.email}
                onChange={changehandler}
                name="email"
                placeholder="enter email id"
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"></input>
            </label>

            <label  className="w-full relative"> 
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    password<sup className="text-pink-200">*</sup>
                </p>
                <input
                required
                type={showpassword?("text"):("password")}
                value={formdata.password}
                onChange={changehandler}
                name="password"
                placeholder="password"
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"></input>


                <span 
                className="absolute right-3 top-[38px] cursor-pointer "
                onClick={()=>setshowpassword((prev)=>!prev)}>
                    {showpassword ?(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                </span>
                <Link to="#">
                <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
                forget password
                </p>
                </Link>
            </label>
<button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">sign in</button>

        </form>
    )
}
export default Loginform;