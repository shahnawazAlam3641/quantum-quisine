import React from "react";

import ReactDOM from "react-dom/client";

import { imgurl , restaurantList } from "./src/components/RestaurantData";
import Nav from "./src/components/Nav";
import FoodCard from "./src/components/Foodcard";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";


  const AppLayout = ()=>(
     <>
        <Nav/>
        <Body/>
        <Footer/>
    </>
    
  )
    
  



let reactroot = ReactDOM.createRoot(document.getElementById("root"));

    reactroot.render(<AppLayout/>);