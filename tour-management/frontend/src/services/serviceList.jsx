import React from 'react';
import image1 from "./../assets/images/feature1.png";
import image2 from "./../assets/images/feature2.jpg";
import image3 from "./../assets/images/feature3.png";


import ServiceCard from './service-card';
const serviceData = [
    {
        imageURL: image1,
        title: "24X7 App Support",
        description: "We crawl the web so you don't have to. Every user is equipped with a customer support."
    },
    {
        imageURL: image2,
        title: "Optimize route planner",
        description: "Turn-by-turn directions perfect for road trips, route plans, and saving $$$ on gas! Find your way with the best route auto-rearranged for multiple locations."
    },
    {
        imageURL: image3,
        title: "Get personalized suggestions",
        description: "Find the best places to visit with smart recommendations and travel insight based on your itinerary with our trip planner AI."
    }
]

const ServiceList = () =>{
    return(
        <div className='flex my-5 text-center items-center'>
            {serviceData.map((item,index) => <div key={index}>
                <ServiceCard item={item} />
            </div>)}
        </div>
    )
}
export default ServiceList;