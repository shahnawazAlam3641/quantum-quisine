import { useState } from "react"
import { restaurantList} from "./RestaurantData"
import FoodCard from "./Foodcard"



const Body = ()=> {

    function inputText(e){
        setSearchText(e.target.value) 
        // console.log(SearchText)
    }
    
    // function filter(searchText, restaurants){
    //     console.log(searchText, restaurants)
    //   const filteredData =  restaurants.filter(function(restaurant){

    //     console.log(restaurant.data.name.includes(searchText))
    //        return restaurant.data.name.includes(searchText)

           
    //     })

    //     console.log(filteredData)

    //     return filteredData
    // }

    function filter(searchText, restaurants) {
        const formattedSearchText = searchText.trim().toLowerCase(); // Trim and convert to lowercase
    
        const filteredData = restaurants.filter(function(restaurant) {
            // Format restaurant names for comparison
            const formattedRestaurantName = restaurant.data.name.toLowerCase().replace(/\s/g, '');
    
            return formattedRestaurantName.includes(formattedSearchText);
        });

        restaurants = restaurantList
    
        return filteredData;
    }
    
    const [restaurants , setRestaurants] = useState(restaurantList)
    const [searchText, setSearchText] = useState() 

    return (<div className="body">
        <div className="search-container">
            <input placeholder="Search Your Food" type="text" value = {searchText} onChange={inputText}/>
            <button type="button" className="btn" onClick={()=>{
                const data = filter(searchText , restaurants)
                console.log(data)
                setRestaurants(data)

                
            }}>Search</button>

        </div>
        <div className="food-container">
            {
              restaurants.map((restaurant, index) => (
                <FoodCard key={restaurants[index].data?.id} restaurant = {restaurants[index]}  />
      ))
            }
        </div>
    </div>)
}

export default Body