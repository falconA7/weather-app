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
  
      const fetchWeather = (cityName:string) => {
          const apiKey = import.meta.env.VITE_WEATHER_API_KEY
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
          )
              .then(res=> res.json() )
              .then(data=>{
                console.log('Apiレスポンス', data)
                console.log('apiKeyの長さ:', apiKey?.length)
                setResults({
                  country: data.sys.country,           
                  cityName: data.name,                 
                  temperature: data.main.temp,          
                  conditionText: data.weather[0].description,  
                  icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                   })
              })
      }

      const getWeather = (e:React.SubmitEvent<HTMLFormElement>) =>{
        e.preventDefault()
        fetchWeather(city)
      }

      const getWeatherByCity = (cityName:string)=> {
        fetchWeather(cityName)
      }
  
    return(
      <div>
        <Title/>
        <Favorites getWeatherByCity={getWeatherByCity}/>
        <Form setCity={setCity} getWeather={getWeather}/>
        <Results results={results}/>
      </div>
    )
}

export default App 
