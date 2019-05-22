import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './Components/form';
import Title from './Components/title';
import Weather from './Components/weather';
import * as serviceWorker from './serviceWorker';
const API_KEY="c426838f54249636813d2c39bf5917f0";
class App extends React.Component{

   state={
       temperature:undefined,
       humidity:undefined,
       name:undefined,
       description:undefined,
       error:undefined
   }


    getWeather= async (e)=> {
        e.preventDefault();
        //const country=e.target.elements.country.value;
        //const city=e.target.elements.city.value;
        const country=document.getElementById('country').value;
        const city=document.getElementById('city').value;
        const resp= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const weatherdata=await resp.json();

        if(city && country){
            console.log(weatherdata);
            this.setState(
                {
                    temperature:weatherdata.main.temp,
                    humidity:weatherdata.main.humidity,
                    name:weatherdata.name,
                    description:weatherdata.weather.description
                })
                

        }
        else{
             this.setState(
                 {
                    temperature:undefined,
                    humidity:undefined,
                    name:undefined,
                    description:undefined,
                    error:"Kindly enter values"
                 }
             )
            
        }
        
        
    }
       

    
    render(){
        return(
            <div>
               
                <Title />
                <Form getWeather={this.getWeather}/>
                <Weather temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    name={this.state.name}
                    error={this.state.error} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
