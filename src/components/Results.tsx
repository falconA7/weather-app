type ResultsProps = {
  results:{
    country: string
    cityName: string
    temperature: string
    conditionText: string
    icon: string
   }
}
const Results =(props:ResultsProps)=>{
    return(
       <div>

        {props.results.country && 
        <div>{props.results.country}</div>}
       </div>
    )
}

export default Results