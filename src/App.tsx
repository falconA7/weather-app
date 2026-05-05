import {useState} from "react"
import Title from "./components/Title"
import Form from "./components/Form"
import Results from "./components/Results"
import Favorites from "./components/Favorites"

type ResultsState = {
  country: string
  cityName: string
  temperature: string
  conditionText: string
  icon: string
}

const App =()=>{

  const [city,setCity] = useState<string>("")

    const [results,setResults] = useState<ResultsState>({
        country:"",
        cityName:"",
        temperature:"",
        conditionText:"",
        icon:""
    })
  
      const getWeather = (e: React.SubmitEvent<HTMLFormElement>) => {
          e.preventDefault()
          const apiKey = import.meta.env.VITE_WEATHER_API_KEY
          fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
          )
              .then(res=> res.json() )
              .then(data=>{
                setResults({
                  country:data.location.country,
                  cityName:data.location.name,
                  temperature:data.current.temp_c,
                  conditionText:data.current.condition.text,
                  icon:data.current.condition.icon,

                })
              })
      }
  
    return(
      <div>
        <Title/>
        <Form setCity={setCity} getWeather={getWeather}/>
        <Results results={results}/>
        <Favorites setCity={setCity} getWeather={getWeather}/>
      </div>
    )
}

export default App 
