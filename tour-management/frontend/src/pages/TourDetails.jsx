import React,{useRef,useState} from "react";
import { useParams } from "react-router-dom";
import tourData from "../assets/data/tours";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { FaSackDollar } from "react-icons/fa6";
import avatar from "../assets/images/avatar.jpg";
import { RiPinDistanceFill } from "react-icons/ri";
import Booking from "../components/Booking/Booking";

const TourDetails = () =>{

    const {id} = useParams();
    const reviewMsgRef = useRef('');
    const [tourRating, setTourRating] = useState(null);
    const tour = tourData.find(tour=>tour.id===id);

    const {photo,title,desc,avgRating,price,reviews,city,distance,maxGroupSize,img1,img2} = tour;

    const options = {day:"numeric",month:"long",year:"numeric"};

    const submitHandler = e =>{
        e.preventDefault()
        const reviewText = reviewMsgRef.current.value;
        alert(`${reviewText},${tourRating}`);
    }
    return(
        <div>
            <div className="flex mx-10 relative">
                <div className="m-4 flex flex-col">
                    <img src={photo} alt="" className="w-[500px] h-[330px]"/>
                </div>
                <div className="w-[360px] my-4 bg-[#f5f5f5] shadow-md p-4 h-[330px]">
                    <h4>{title}</h4>
                    <p>{desc}</p>
                    <div className="flex gap-2">
                        <FaStar className="my-1" />
                        <div className="flex">
                            <p>{avgRating}</p>
                            <p>({reviews.length})</p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="flex">
                            <FaLocationDot className="my-1"/>
                            <p>{city}</p>
                        </div>
                        <div className="flex">
                            <FaSackDollar className="my-1 mx-2"/>
                            <p>${price}/per person</p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="flex">
                            <FaUserGroup className="my-1 mx-1"/>
                            <p>{maxGroupSize}</p>
                        </div>
                        <div className="flex mx-[34px]">
                            <RiPinDistanceFill className="my-1  text-xl"/>
                            <p>{distance}k/m</p>
                        </div>
                    </div>
                </div>
                <div>
                   <div className="flex flex-col w-[300px] h-[675px] m-4 gap-4">
                        <img className="h-1/3" src={img1} alt=""></img>
                        <img className="h-2/3" src={img2} alt=""></img>
                   </div>
                </div>
            </div>
            <div className="absolute top-[64%] left-[60px] w-[890px] h-[320px] my-4 p-4">
                <Booking tour={tour}/>
            </div>
            <div className="flex  mx-[60px] gap-4 my-4">
                <div className="border border-3 border-black my-2 w-[420px] h-[320px]">
                    {reviews?.map((review)=>(
                        <div>
                            <div className="flex h-50 my-1 gap-2">
                                <img className="w-10" src={avatar} alt=""></img>
                                <p className="my-2 font-bold">{review.name}</p>
                            </div>
                            <div className="flex gap-10">
                                <p>{new Date('01-18-2022').toLocaleDateString("en-us",options)}</p>
                                <div className="flex gap-0.5">
                                    <p>5</p>
                                    <FaStar  className="my-1 text-[#dfa856]"/>
                                </div>
                            </div>
                            <p>"{review.review}"</p>
                        </div>
                    ))}
                </div>
                <div className="bg-[#f5f5f5] h-[320px] my-2 w-[765px]">
                    <div className="p-2 ">
                        <h2>Reviews ({reviews.length})</h2>
                        <form onSubmit={submitHandler}>
                            <div className="flex gap-2 text-[#dfa856]">
                                <div className="flex" onClick={()=>setTourRating(5)}>
                                    1
                                    <FaStar className="my-1"/>
                                </div>
                                <div className="flex" onClick={()=>setTourRating(2)}>
                                    2
                                    <FaStar className="my-1"/>
                                </div>
                                <div className="flex" onClick={()=>setTourRating(3)}>
                                    3
                                    <FaStar className="my-1"/>
                                </div>
                                <div className="flex" onClick={()=>setTourRating(4)}>
                                    4
                                    <FaStar className="my-1"/>
                                </div>
                                <div className="flex" onClick={()=>setTourRating(5)}>
                                    5
                                    <FaStar className="my-1"/>
                                </div>
                            </div>
                            <div className="my-2 w-full h-auto ">
                                <textarea required ref={reviewMsgRef} placeholder="Enter your thoughts here" className="bg-[#f5f5f5] w-full h-[180px] p-2 focus:border border-5 border-[#dfa856] focus:outline-none"></textarea>
                                <button type="submit" className="text-black bg-[#dfa856] p-1 px-2 rounded-lg">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourDetails;