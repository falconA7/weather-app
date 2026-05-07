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
          const apiKey = import.meta.env.VITE_
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
          )
              .then(res=> res.json() )
              .then(data=>{
                setResults({
                  country: data.sys.country,           
                  cityName: data.name,                 
                  temperature: data.main.temp,          
                  conditionText: data.weather[0].description,  
                  icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
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
