import React from "react";
import {NavLink , Link} from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";
import logo from "../../assets/images/logo.png";
import { useRef, useEffect } from "react";
import './header.css';
const nav_link=[
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'/about',
        display:'About'
    },
    {
        path:'/tours',
        display:'Tours'
    },
]

const Header = () =>{
    const headerRef = useRef(null);
    const stickyHeaderFunc = () =>{
        window.addEventListener('scroll',()=>{
            if(document.body.scrollTop > 80||document.documentElement.scrollTop>80){
                headerRef.current.classList.add('sticky-header');
            }
            else
            {
                headerRef.current.classList.remove('sticky-header')
            }
        })
    }

    useEffect(()=>{
        stickyHeaderFunc()

        return window.removeEventListener('scroll',stickyHeaderFunc);
    })

    return(
        <header className="w-full h-16 bg-[#ece0cc] flex items-center justify-between px-4" ref={headerRef}>
            <div className="flex items-center">
                <img src={logo} alt='logoImage' className="w-16 h-16"></img>
                <div className="border-4 border-solid border-[#1c4b4c] border-l-[#ece0cc] ml-2">
                    <h4 className="text-[#1c4b4c] px-2">Alongside</h4>
                </div>
            </div>
            <div className="flex space-x-4">
                <ul className="flex my-4 text-base items-center space-x-8">
                    {nav_link.map((item, index) => (
                        <li key={index}>
                            <NavLink className={navClass=>navClass.isActive?"text-[#1c4b4c] hover:text-black font-bold no-underline":"text-black hover:text-black font-bold no-underline"} to={item.path}>{item.display}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex items-center">
                <div className="flex space-x-4">
                    <button className="bg-[#265757] w-20 h-10 text-white rounded-lg"><Link className="no-underline text-white flex items-center justify-center h-full" to='/login'>Login</Link></button>
                    <button className="bg-[#265757] w-20 h-10 text-white rounded-lg"><Link className="no-underline text-white flex items-center justify-center h-full" to='/register'>Register</Link></button>
                </div>
                <span className="hidden">
                    <IoIosMenu />
                </span>
            </div>
        </header>
    );
};

export default Header;