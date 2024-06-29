import React from 'react';
import './service-card.css'
const ServiceCard = ({item}) =>{

    const {imageURL , title, description}=item;
    return(
        <div className='feature-container'>
            <div >
                <img className="feature-img ml-2" src={imageURL} alt=""/>
            </div>
            <h4 className="heading mt-2">{title}</h4>
            <p className="description">{description}</p>
        </div>
    )
}
export default ServiceCard;