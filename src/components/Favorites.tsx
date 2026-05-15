type FavoritesProps ={
    getWeatherByCity:(cityName: string)=>void
}
const Favorites = (props:FavoritesProps)=>{
    return(
        <span className="favorites">
            <h2>Favorite places</h2>
            <span>
                    <button onClick={()=>props.getWeatherByCity("London")}>London</button>
                    <button onClick={()=>props.getWeatherByCity("Tokyo")}>Tokyo</button>
                    <button onClick={()=>props.getWeatherByCity("New York")}>NEW-YORK</button>
            </span>
        </span>
    )
}

export default Favorites