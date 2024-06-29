import React from "react";
import AboutImg from "../assets/images/about.jpg";
import Tours from "./Tours";
import { Link } from "react-router-dom";
const About = () =>{
    return(
        <div className="flex w-full h-[600px] justify-center">
            <div className="w-[50%] h-[600px] bg-[#00080b] p-4">
                <h1 className="underline text-white"> About Us</h1>
                <p className="text-white">Welcome to Alongside, where your travel aspirations take flight! As avid explorers ourselves, we founded Alongside with a passion for transforming your travel dreams into unforgettable realities. Imagine a platform that seamlessly merges inspiration and practicality, offering a curated haven for travel planning and booking.</p>
                <h1 className="underline text-white">Our Vision</h1>
                <p className="text-white">At Alongside, we're not just another travel website; we're your travel companion, dedicated to simplifying the journey from inspiration to exploration. Our user-centric approach ensures an intuitive experience, providing a diverse array of destinations, accommodations, and activities tailored to your preferences.</p>
                <p className="text-white">Embark on a virtual journey with Alongside, where wanderlust meets convenience. From personalized itineraries to exclusive deals, we've meticulously crafted a space to nurture your travel aspirations. Join us in celebrating the art of exploration, and let Alongside be your trusted guide on the path to extraordinary adventures. Your next great escape is <Link className="text-white" to='/tours'>Here</Link>!</p>
            </div>
            <img src={AboutImg} alt="" className="w-[50%] h-[600px]"/>
        </div>
    )
}
export default About;