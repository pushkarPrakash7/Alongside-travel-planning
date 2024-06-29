import React from "react";
import backgroundVideo from "./../assets/images/background-video.mp4";
import "./../styles/hero.css"; // Import your external CSS file
import image3 from "./../assets/images/image1.jpg"
import image1 from "./../assets/images/vacation.jpg"
import image2 from "./../assets/images/vacation2.jpg"

import SearchBar from "../shared/search-bar";
import ServiceList from "../services/serviceList";
import FeaturedTourList from "../components/Featured-tour/FeaturedTourList";
import MobileApp from "../components/MobileApp/mobileApp";
import Testimonial from "../components/testimonial/testimonial";
import NewsLetter from "../shared/newsletter";

const Home = () => {
  return (
    <div>
      <div className="hero-section">
        <video className="video-background" autoPlay muted loop src={backgroundVideo}></video>
        <div className="overlay-content hero-title">
        <h1 className="text-[#1d4a4c]">
          <span style={{display :"block", textDecoration:"underline #e28743" }}>Adventure</span>
          <span style={{display :"block"}}> & Experience</span>
          <span style={{display :"block"}}> The Travel!</span></h1>
        <p className="text-lg text-white">Welcome to Alongside, where every journey is an adventure waiting to unfold. Explore diverse destinations, discover hidden gems, and create lasting memories with our curated travel experiences. Your extraordinary adventure begins here.</p>
        </div>
        <div className="overlay-content img-container">
          <img className="hero-img image1" src={image1} alt=""></img>
          <img className="hero-img image2" src={image2} alt=""></img>
          <img className="hero-img image3" src={image3} alt=""></img>
        </div>
        <SearchBar className="overlay-content" />
      </div>
      <div className="text-center my-5">
        <h2 className="text-[#264747]">What we Offer</h2>
        <h5>Don't worry when ALONGSIDE is by your side.</h5>
      </div>
      <div className="service-list">
        <ServiceList />
      </div>
      <div>
        <div className="featured-title">
          <h2>Discover your next destination or new interesting place</h2>
          <p>Get inspired from guides around the world, with expert tips, travel insight, and recommendations from our community for your next destination. See all Alongside travel guides. Or you can write a guide to share places you love with other travelers!</p>
        </div>
        <div className="flex">
          <FeaturedTourList />
        </div>
      </div>
      <div className="App-Container">
        <MobileApp />
      </div>
      <div>
        <NewsLetter />
      </div>
      <div className="test-body">
        <h2 className="text-center">What travelers can't stop talking about</h2>
        <Testimonial/>
      </div>
    </div>
  );
};

export default Home;
