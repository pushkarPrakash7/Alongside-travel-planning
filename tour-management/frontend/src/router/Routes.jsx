import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";


import Login from "./../pages/Login";
import Home from "../pages/Home"
import Register from "../pages/Register";
import SearchResult from "../pages/SearchResult";
import TourDetails from "../pages/TourDetails";
import Tours from "../pages/Tours";
import NewsLetter from "../shared/newsletter";
import Thankyou from "../pages/ThankYou";
import About from "../pages/About";

const Routers = () =>{
    return(
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/tours' element={<Tours/>}></Route>
        <Route path='/tours/:id' element={<TourDetails/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/newsletter' element={<NewsLetter/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/thankyou' element={<Thankyou/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/tour/search' element={<SearchResult/>}></Route>
    </Routes>
    );
}

export default Routers;