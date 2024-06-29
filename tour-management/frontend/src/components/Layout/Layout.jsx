import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/Footer.jsx";
import Routers from "../../router/Routes";

const Layout = () =>{
    return(
        <div>
            <Header/>
            <Routers />
            <Footer/>
        </div>
    );
};

export default Layout;