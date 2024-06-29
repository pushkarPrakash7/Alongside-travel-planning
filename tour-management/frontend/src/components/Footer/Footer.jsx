import React from "react";
import './Footer.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const quick_Links=[
    {
        path: "/home",
        display: "Home",
    },
    {
        path: "/about",
        display: "About",
    },
    {
        path: "/tours",
        display: "Tours",
    },
]


const quick_Links2=[
    {
        path: "/newsletter",
        display: "Write a blog",
    },
    {
        path: "/login",
        display: "Login",
    },
    {
        path: "/register",
        display: "Register",
    },
]

const Footer = () =>{
    return(
        <div className="footer-body">
            <div className="flex">
                <div className="logo-container">
                    <div className="flex items-center">
                        <img src={logo} alt='logoImage' className="w-16 h-16"></img>
                        <div className="border-4 border-solid border-[#1c4b4c] border-l-[#ece0cc] ml-2">
                            <h4 className="text-[#1c4b4c] px-2">Alongside</h4>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 icons mx-5">
                        <IoLogoInstagram/>
                        <IoLogoTwitter/>
                        <IoLogoYoutube/>
                        <IoLogoLinkedin/>
                    </div>
                </div>
                <div className="discover-links">
                    <h4>Discover</h4>
                    {quick_Links.map((item,index)=>(
                        <div>
                            <Link to={item.path}>{item.display}</Link>
                        </div>
                    ))}
                </div>
                <div className="discover-links">
                    <h4>Navigate</h4>
                    {quick_Links2.map((item,index)=>(
                        <div>
                            <Link to={item.path}>{item.display}</Link>
                        </div>
                    ))}
                </div>
                <div className="contactUs">
                    <h4>Contact Us</h4>
                    <div className="flex gap-4 font-semibold my-4">
                        <div>
                            <IoIosCall />
                            <p>+91-8502478996</p>
                        </div>
                        <div>
                            <FaWhatsapp />
                            <p>+91-111-222-3333</p>
                        </div>
                        <div>
                            <MdOutlineEmail />
                            <p>alongsidetravels@nic.in</p>
                        </div>
                    </div>
                </div>
            </div>
        <div className="copyright">
            <p>Made with ❤ in India © {new Date().getFullYear()} AlongSide Inc.</p>
        </div>
    </div>
    );
};

export default Footer;