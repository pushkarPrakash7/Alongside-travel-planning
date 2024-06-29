import React from "react";
import './tourCard.css';
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import {Link} from 'react-router-dom';

import TourDetails from "../pages/TourDetails";
const TourCard = ({tour}) =>
{
    const {id, title, city, photo, price, featured, reviews} = tour
    const totalRating = reviews?.reduce((acc, item)=>acc+item.rating ,0);

    const avgRating = totalRating ===0? "":totalRating===1? totalRating: totalRating/reviews?.length;
    
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return(
        <div className="tour-card">
            <div className="img-div">
                <img src={photo} alt=""/>
                <div>
                    {featured && <p className="featured-div">Featured</p>}
                </div>
            </div>
            <div>
                <div>
                    <div className="flex justify-between ml-2">
                        <div className="flex">
                            <CiLocationOn className="mt-1 text-[#264747]"/>
                            <p>{city}</p>
                        </div>
                        <div className="flex relative">
                            <FaStar className="mt-1"/>
                            <p>{avgRating===0?null:avgRating}</p>
                            {totalRating===0?<p>Not Rated</p>:<p>({reviews.length})</p>}
                        </div>
                    </div>
                    <div className="ml-2 title-text">
                        <Link to={`/tours/${id}`} onClick={scrollToTop}><h6>{title}</h6></Link>
                    </div>
                    <div className="flex ml-2 relative">
                        <h6>${price} /per person</h6>
                        <button className="mx-4 mb-2 rounded-lg">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TourCard;