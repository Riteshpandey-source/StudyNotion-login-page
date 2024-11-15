import React, { useState } from "react";
import toast from "react-hot-toast";
import{AiOutlineEye,AiOutlineEyeInvisible} from"react-icons/ai";
import { useNavigate } from "react-router-dom";


const Signupform =({setIsLoggedIn})=>{
    const navigate= useNavigate();

    const [formdata,setformdata]=useState({
        firstname:"",
        lastname:"" ,
        email:"",
        password:"",
    confirmpassword:"" 
    })

    const[showpassword,setshowpassword]=useState(false);
    const[showconfirmpassword,setshowconfirmpassword]=useState(false);
    const[accounttype,setaccounttype]=useState("student");

    function changehandler(event){

        setformdata((prevdata)=>(
            {
                ...prevdata,
                [event.target.name]:event.target.value
            }        )
        )

    }
    function submithandler(event){
        event.preventDefault();
        if(formdata.password !=formdata.confirmpassword){
            toast.error("password do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("account create");
       const accountdata ={
        ...formdata
       }
       const finaldata=
       {
        ...accountdata,
        accounttype
       }
       console.log("printing account data");
       console.log(accountdata);

       navigate("/dashboard");


    }
  
    return(
        <div >

            <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max ">
            <button
            className={`${accounttype==="student"
                ?
                "bg-richblack-900 text-richblack-5"
                :"bg-transparent text-richblack-200"}
py-2 px-5 rounded-full transition-all duration-200
            `}
            onClick={()=>setaccounttype("student")}>
                student
            </button>
            <button
              className={`${accounttype==="instructor"
                ?
                "bg-richblack-900 text-richblack-5"
                :"bg-transparent text-richblack-200"}
py-2 px-5 rounded-full transition-all duration-200
            `}
              onClick={()=>setaccounttype("instructor")}>
                instructor
            </button>
        </div>

                <form onSubmit={submithandler}>
                    <div className="flex gap-x-4 mt-[10px]">
                    <label className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]" >
                        first name<sup className="text-pink-200">*</sup>
                        </p>
                        <input
                        required
                        type="text"
                        value={formdata.firstname}
                        onChange={changehandler}
                        name="firstname"
                        placeholder="enter first name"
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"></input>
                    </label>
        
                    <label className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            lastname<sup className="text-pink-200">*</sup>
                        </p>
                        <input
                        required
                        type="text"
                        value={formdata.lastname}
                        onChange={changehandler}
                        name="lastname"
                        placeholder="enter last name"className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        ></input>
        
        
                    </label>
                    </div>
                    <div className="mt-[20px]">

                    
                    <label className="w-full mt-[20px]">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Email address<sup className="text-pink-200">*</sup></p>
                    <input
                required
                type="email"
                value={formdata.email}
                onChange={changehandler}
                name="email"
                placeholder="enter email id"
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"></input>
            </label>
                    </div> 

                <div className="flex gap-x-4 mt-[20px]">
            <label className="relative w-full" >
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]" >
                 create   password<sup className="text-pink-200">*</sup>
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
                </label>


                <label className="relative w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                 confirmpassword<sup className="text-pink-200">*</sup>
                </p>
                <input
                required
                type={showconfirmpassword?("text"):("password")}
                value={formdata.confirmpassword}
                onChange={changehandler}
                name="confirmpassword"
                placeholder="confirm password"
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"></input>

                <span 
                className="absolute right-3 top-[38px] cursor-pointer "
                onClick={()=>setshowconfirmpassword((prev)=>!prev)}>
                    {showconfirmpassword ?(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye  fontSize={24} fill="#AFB2BF"/>)}
                </span>
                </label>
                </div>

                <button className="bg-yellow-50 w-full  rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
                    create account
                </button>
                    </form>
        
        
        </div>

    )      
            
}
        export default Signupform;
    
