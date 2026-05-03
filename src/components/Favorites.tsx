type{

}

const Favorites = (props:favoritesProps)=>{
    return(
        <div className="favorites">
            <h2>Favorite palaces</h2>
            <div>
                <button onClick={props.getWeather}>London</button>
                <button onClick={props.getWeather}>Tokyo</button>
                <button onClick={props.getWeather}>NEW-YORK</button>
            </div>
        </div>
    )
}

export default Favorites