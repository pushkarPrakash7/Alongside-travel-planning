import React,{useRef} from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import "../shared/search.css";
const SearchBar = () => {
    const locationRef = useRef('');
    const dateRef = useRef('');
    const maxGroupSizeRef = useRef('');

    const searchHandler = () =>{
        const location = locationRef.current.value;
        const date = dateRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;

        if(location===''|| date===''||maxGroupSize==='')
            return alert("All fields are required!");
    }
    return(
        <div className="search-bar">
            <div className="groups">
                <input className="input-box" type="text" placeholder="Destination" ref={locationRef}></input>
                <div className="icon-container">
                    <FaLocationDot className="icons"/>
                </div>
            </div>
            <div className="groups">
                <input placeholder="Date of travel" type="date" ref={dateRef}></input>
            </div>
            <div className="groups">
                <input type="number" placeholder="Number of people" ref={maxGroupSizeRef}></input>
                <div className="icon-container">
                    <MdGroups className="icons"/>
                </div>
            </div>
            <div>
                <button type="submit" onClick={searchHandler}>Search</button>
            </div>
        </div>
    )
}
export default SearchBar;