import React from "react";
import "./CommonSection.css";
const CommonSection = ({title}) =>{
    return(
        <div>
            <div className="tours">
                <h1 className="heading-title text-center">{title}</h1>
            </div>
        </div>
    );
};

export default CommonSection;