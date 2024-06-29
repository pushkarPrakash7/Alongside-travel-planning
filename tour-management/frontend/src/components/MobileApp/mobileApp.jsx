import React from "react";
import mobileAppImage from "../../assets/images/mobileapp2.jpg";
import mobileAppImage2 from "../../assets/images/appImage.png";
import playStore from "../../assets/images/googleplay.png";
import appStore from "../../assets/images/appstore.png";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa6";
import './mobileApp.css'

const MobileApp = () =>{
    return(
        <div className="app-content-body">
            <div className="app-content">
                <h2>Plan on the go with our free travel app</h2>
                <p>With Wanderlog's mobile travel planner on Android and iOS, access and edit your trips wherever you go — even while offline.</p>
                <div className="flex">
                    <img className="logo-image" src={playStore} alt=""></img>
                    <img className="logo-image mx-2" src={appStore} alt=""></img>
                </div>
                <div className="flex m-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                </div>
                <p>4.9 on App Store, 4.5 on Google Play</p>
            </div>
            <img className="main-img" src={mobileAppImage2} alt="" />
        </div>
    )
}

export default MobileApp;