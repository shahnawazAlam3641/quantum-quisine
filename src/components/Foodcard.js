import { imgurl , restaurantList } from "./RestaurantData";
import { useEffect } from "react";

// const FoodCard = ({filteredRestaurants:{data:{cloudinaryImageId,
//     name,
//     avgRating,
//     deliveryTime,
//     cuisines,
//     locality}}})=> {
//   //  console.log(restaurant)


   
//       return (
//       <div className="food-card">
//           <img className="card-img" src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId } />
//           <h1 className="card-title">{name}</h1>
//           <p>
//             <span>{avgRating } ⋅</span><span> {deliveryTime + "mins"}</span>
//           </p>
//           <p>{cuisines.join(", ")}</p>
//           <p>{locality}</p>
//       </div>
//       )
//   }


const FoodCard = ({restaurant:{info:{name,cloudinaryImageId,cuisines,avgRating,locality, sla:{deliveryTime}}}})=> {
//  console.log(restaurant)

// console.log("foodcard clg",{restaurant})
 
    return (
    <div className="food-card">
        <img className="card-img" src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId } />
        <h1 className="card-title">{name}</h1>
        <p>
          <span>{avgRating } ⋅</span><span> {deliveryTime + "mins"}</span>
        </p>
        <p>{cuisines.join(", ")}</p>
        <p>{locality}</p>
    </div>
    )
}

  export default FoodCard