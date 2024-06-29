import React from 'react';
import './newsletter.css';
import blogImage2 from "../assets/images/experience.png";
const NewsLetter = () =>{
    return(
        <div className='news-body'>
            <img className="news-img" src={blogImage2} alt="" />
            <div className='news-content'>
                <h2>Subscribe to our News Letter Blog.</h2>\
                <p>Get daily updates to ease yourtravel planning for your next Destination by subscripng to Alongside travel blogs.</p>
                <h5>Enter your Email here</h5>
                <div className='input-field'>
                    <input type="text" placeholder='Enter your Email'></input>
                    <button className='rounded-lg py-1 px-2 text-white' type='submit'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}
export default NewsLetter;