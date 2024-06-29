import React,{useState} from "react";
import register from "../assets/images/register.png";
import user from "../assets/images/user.jpg";
import {Link} from "react-router-dom"

const Register = () =>{
    const [credentials, setCredentials]=useState({
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        password: undefined
    });

    const handleChange = e =>{
        setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
    };

    const handleClick = e =>{
        e.preventDefault()
    }

    return(
        <div className="w-full h-[600px]">
            <div className="flex justify-center my-[80px] w-[850px] mx-[260px] shadow-lg">
                <div>
                    <img className="w-[450px] h-[440px]" src={register} alt=""></img>
                </div>
                <form onSubmit={handleClick}>
                    <div className="w-[400px] h-[440px] bg-[#80c590] px-4 py-16 relative">
                        <h2 className="text-center text-white">Register</h2>
                        <input id="firstName" className="my-2 w-[350px] h-8 px-2 focus:outline-none  rounded-md" placeholder="Enter your First Name" type="text" onChange={handleChange}></input>
                        <input id="lastName" className="my-2 w-[350px] h-8 px-2 focus:outline-none  rounded-md" placeholder="Enter your Last Name" type="text" onChange={handleChange}></input>
                        <input id="email" className="my-2 w-[350px] h-8 px-2 focus:outline-none  rounded-md" placeholder="Enter your Email" type="text" onChange={handleChange}></input>
                        <input id="password" className="my-2 w-[350px] h-8 px-2 focus:outline-none rounded-md" placeholder="Enter your password" type="password" onChange={handleChange}></input>
                        <button type="submit" className="bg-[#3f5f4d] py-1 px-2 my-2 rounded-2xl self-center w-[350px]">Register</button>
                        <div className="">
                            <img className="w-[80px] h-[80px] rounded-[50%] absolute top-[-10%] left-[40%]" src={user} alt=""></img>
                        </div>
                        <p className="text-center my-2">An account exists with these credentials. <Link to='/login'>Log In</Link></p>
                    </div> 
                </form>
            </div>
        </div>
    );
};

export default Register;