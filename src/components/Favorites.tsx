type FavoritesProps ={
    getWeather:any
}
const Favorites = (props:FavoritesProps)=>{
    return(
        <div className="favorites">
            <h2>Favorite palaces</h2>
            <div>
                <form action="">
                    <button onClick={props.getWeather}>London</button>
                    <button onClick={props.getWeather}>Tokyo</button>
                    <button onClick={props.getWeather}>NEW-YORK</button>
                </form>
            </div>
        </div>
    )
}

export default Favorites