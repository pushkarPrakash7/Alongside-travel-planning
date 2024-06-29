import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ava1 from "../../assets/images/ava-1.jpg";
import ava2 from "../../assets/images/ava-2.jpg";
import ava3 from "../../assets/images/ava-3.jpg";
import ava4 from "../../assets/images/ava-4.jpg";
import ava5 from "../../assets/images/ava-5.jpg";

import './testimonial.css';
const data=[
    {
        name: "John Doe, Travel Blogger",
        img: ava1, 
        review:"Planning your trip by having all the attractions already plugged into a map makes trip planning so much easier."
    },
    {
        name: "Lydia Yang, Founder",
        img: ava2,
        review: "So much easier to visualize and plan a road trip to my favourite rock climbing destinations and explore the area around."
    },
    {
        name:"Kelvin S.",
        img: ava3,
        review:"Yesterday I walked my kids through the vacation timeline that I've built so far and their excitement levels went way up!"
    },
    {
        name:"Nadia M.",
        img: ava4,
        review:"I'm a rather extensive planner when I take trips so this was great. I liked how it auto-filled all of my travel information from my email account."
    },
    {
        name: "Selena D.",
        img: ava5,
        review: "It left me speechless that I can add places to my trip and they get automatically populated with a featured pic and description from the web."
    },
]

const Testimonial = () =>{
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
    return(
        <div className="test-div">
            <Slider {...settings}>
                {data.map((d)=>(
                    <div className="test-card">
                       <div className="image-card">
                            <img src={d.img} alt=""/>
                       </div>
                       <div className="test-content rounded-xl">
                            <p className="first-para">{d.name}</p>
                            <p>{d.review}</p>
                            <button >Read More</button>
                       </div> 
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Testimonial;