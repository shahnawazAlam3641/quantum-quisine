import { useState, useEffect } from "react"
// import { restaurantList} from "./RestaurantData"
import FoodCard from "./Foodcard"
import { Shimmer , NotFound } from "./Shimmer"
import Search from "./Search";



const handleSubmit = (event) => {
    event.preventDefault(); 
};

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

    function filter(searchText, allRestaurants) {
        const formattedSearchText = searchText.trim().toLowerCase(); // Trim and convert to lowercase

    //gpt code
    console.log(allRestaurants)
        const filteredData = allRestaurants.filter(function(allRestaurants) {
            // Format restaurant names for comparison
            console.log("resttt", allRestaurants)
            const formattedRestaurantName = allRestaurants.info.name.toLowerCase();
    
            return formattedRestaurantName.includes(formattedSearchText.toLowerCase());
        });

        // restaurants = restaurantList
    
        return filteredData;
    }
    
    const [allRestaurants , setAllRestaurants] = useState([])
    const [filteredRestaurants , setFilteredRestaurants] = useState([])

    const [searchText, setSearchText] = useState("") 

    // getRestaurants()
    console.log("filter",{filteredRestaurants} , "all",{allRestaurants})

console.log("fine")
    useEffect(() => {
        console.log("useeff works")
        getRestaurants()
        
      }, []);

      

      async function getRestaurants(){
        console.log("3rd")
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING")
        const data = await response.json();
        console.log(data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log("first")
        const restaurants = data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setAllRestaurants(restaurants)
        setFilteredRestaurants(restaurants)
        console.log("new clg",restaurants)
        }

  if (allRestaurants.length == 0) return  <div className="shimmerContainer"><Shimmer/> <Shimmer/> <Shimmer/> <Shimmer/> <Shimmer/> <Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/></div>

  if (filteredRestaurants.length == 0) return <> <Search setFilteredRestaurants={setFilteredRestaurants} allRestaurants={allRestaurants} filter={filter} searchText = {searchText} inputText ={inputText }/> <NotFound/> </>


    return (<div className="body">
        <Search setFilteredRestaurants={setFilteredRestaurants} allRestaurants={allRestaurants} filter={filter} searchText = {searchText} inputText ={inputText }/>
        <div className="food-container">
            {
              filteredRestaurants.map((restaurant, index) => (
                <FoodCard key={[index]} restaurant = {filteredRestaurants[index]}  />
                
      ))        
            }
        </div>
    </div>)
}



export default Body
export { handleSubmit };