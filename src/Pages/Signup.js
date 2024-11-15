import React from "react";
import Template from "../Components/Template";
import signupImg from "../assets/signup.png";


const Signup=({setIsLoggedIn})=>{
    return(
        <Template
        title="join the million learning to code with studynotion for tree"
        desc1="build skill for today,tomorrow and beyond."
        desc2="education to future -proof your career."
        image={signupImg}
        formtype="Signup"
        setIsLoggedIn={setIsLoggedIn}
        />
    )
}
export default Signup;