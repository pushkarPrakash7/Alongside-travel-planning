import React from 'react';
import TourCard from '../../shared/TourCard';
import tourData from  "../../assets/data/tours"
import './FeaturedTour.css'
const FeaturedTourList = () =>{
    return(
        <div className='featured-list'>
            {tourData?.map(tour=>(
                <div>
                    <TourCard tour={tour}/>
                </div>
            ))}
        </div>
    )
}

export default FeaturedTourList;