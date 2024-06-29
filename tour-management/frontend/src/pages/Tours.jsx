import React,{useState, useEffect} from "react";

import CommonSection from "../shared/CommonSection";
import NewsLetter from "../shared/newsletter";
import SearchBar from "../shared/search-bar";
import TourCard from "../shared/TourCard";
import tourData from "../assets/data/tours";
import "../styles/tours.css"

const Tours =()=>{
    const [pageCount,setPageCount] = useState(0);
    const [page,setPage]=useState(0);

    useEffect(()=>{
        const pages=Math.ceil(5/4);
        setPageCount(pages);
    },[page])

    return(
        <div>
            <div>
                <CommonSection className="common-section" title={"Explore Our Tours!"}/>
                <div>
                    <SearchBar className="search-tour-bar"/>
                </div>
            </div>
            <div className="flex flex-wrap mx-14">
                {tourData?.map(tour=>(
                    <div className="flex flex-wrap w-[600px] relative ">
                        <TourCard tour={tour}/>
                        <div className="tour-content absolute left-[304px] shadow-lg">
                            <h4>{tour.title}</h4>
                            <p>"{tour.desc}"</p>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <div className="navigation">
                    {[...Array(pageCount).keys()].map(number=>(
                        <span key={number} onClick={()=>setPage(number)} className={page===number?'active_page':""}>
                            {number+1}
                        </span>
                    ))}
                </div>
            </div>
            <NewsLetter/>
        </div>
    );
};

export default Tours;