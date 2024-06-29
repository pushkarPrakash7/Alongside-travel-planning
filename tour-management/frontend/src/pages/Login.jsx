import React,{useState} from "react";
import login from "../assets/images/login.png";
import user from "../assets/images/user.jpg";
import {Link} from "react-router-dom"

const Login = () =>{
    const [credentials, setCredentials]=useState({
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
            <div className="flex justify-center my-[120px] w-[850px] mx-[260px] shadow-lg">
                <div>
                    <img className="w-[450px] h-[400px]" src={login} alt=""></img>
                </div>
                <form onSubmit={handleClick}>
                    <div className="w-[400px] h-[400px] bg-[#80c590] px-4 py-16 relative">
                        <h2 className="text-center text-white">Login</h2>
                        <input id="email" className="my-2 w-[350px] h-8 px-2 focus:outline-none  rounded-md" placeholder="Enter your Email" type="text" onChange={handleChange}></input>
                        <input id="password" className="my-2 w-[350px] h-8 px-2 focus:outline-none rounded-md" placeholder="Enter your password" type="password" onChange={handleChange}></input>
                        <button type="submit" className="bg-[#3f5f4d] py-1 px-2 my-2 rounded-2xl self-center w-[350px]">Login</button>
                        <div className="">
                            <img className="w-[80px] h-[80px] rounded-[50%] absolute top-[-10%] left-[40%]" src={user} alt=""></img>
                        </div>
                        <p className="text-center my-2">Don't have an account. <Link to='/register'>Register Now</Link></p>
                    </div> 
                </form>
            </div>
        </div>
    );
};

export default Login;