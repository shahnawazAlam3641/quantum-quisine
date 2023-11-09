import Search from "./Search";


const Shimmer = ()=>(

    

            <div className="shimmer">
        <div className="shimmerImg"></div>
        <div className="shimmerName"></div>
        <div className="shimmerTags"></div>
    </div>


    
)

const NotFound = ()=>(
<>
    {/* <Search setFilteredRestaurants={setFilteredRestaurants} allRestaurants={allRestaurants} filter={filter} searchText = {searchText} inputText ={inputText }/> */}


    <h1 className="norestfound">No Restaurants Found</h1>
    </>
)

export { Shimmer , NotFound }