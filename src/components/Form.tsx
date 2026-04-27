type FormProps= {
    setCity: React.Dispatch<React.SetStateAction<string>>
    getWeather: (e: React.SubmitEvent<HTMLFormElement>) => void
}

const Form = (props:FormProps)=> {
    return (
        <form className="form" onSubmit={props.getWeather}>
           
            <input 
                className="form-input"
                type="text" 
                name="city" 
                placeholder="都市名"
                onChange={e=> props.setCity(e.target.value)}
            />
            
            <button className="form-button" type="submit" onClick={props.getWeather}>
                Get Weather
            </button>
            
        </form>
    )
}


export default Form