import Body, {handleSubmit} from "./Body"

const Search = ({searchText,inputText, filter,allRestaurants,setFilteredRestaurants} )=>(

    
<form className="search-container" onSubmit={handleSubmit}>
            <input placeholder="Search Your Food" type="text" value = {searchText} onChange={inputText}/>
            <button type="submit" className="btn" onClick={()=>{
                
                console.log("fal")
                const data = filter(searchText , allRestaurants)
                console.log("tru",data)
                setFilteredRestaurants(data)

                
            }}>Search</button>
            </form>


)

export default Search