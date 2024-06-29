import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import NewsLetter from "../shared/newsletter";
import { Link } from "react-router-dom";
const Thankyou = () =>{

    const scrollToTop =()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return(
        <div className="w-full h-[800px] text-center my-8">
            <div className="flex items-center justify-center gap-2">
                <FaCheckCircle className="text-5xl text-green-600"/>
                <h2 className="">Booking Successful</h2>
            </div>
            <h4 className="w-[800px] text-center ml-64 my-3">Congratulations! Your booking has been Successful. We will mail all the necessary details on the provided E-mail Address</h4>
            <div className="flex gap-4 items-center justify-center my-[40px]">
                <Link to='/' onClick={scrollToTop}><button className="w-[200px] py-1 px-2 rounded-2xl">Back to Home</button></Link>
                <Link to='/tours' onClick={scrollToTop}><button className="w-[200px] py-1 px-2 rounded-2xl">Explore more tours</button></Link>
            </div>
            <div className="h-[500px] my-8">
                <NewsLetter/>
            </div>
        </div>
    )
}

export default Thankyou;