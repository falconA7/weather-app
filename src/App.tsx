import {useState} from "react"
import Title from "./components/Title"
import Form from "./components/Form"
import Results from "./components/Results"

const App =()=>{

  const [city,setCity] = useState<string>("")
  
      const getWeather = (e: any) => {
          e.preventDefault()
          fetch(`http://api.weatherapi.com/v1/current.json?key=6c1757eee273440f9c312124262004&q=${city}&aqi=no`
          )
              .then(res=> res.json() )
              .then(data=>console.log(data))
      }
  
    return(
      <div>
        <Title/>
        <Form setCity={setCity} getWeather={getWeather}/>
        <Results/>
      </div>
    )
}

export default App 
