import React from 'react';
import Weather from './components/weather';
import Form from './components/form';
import './App.css';

const apiKey = "697de474ea3fd0b3bcff994155b5e4b5";

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      temprature : 0,
      city : "İstanbul",
      humidity : undefined,
      wind : undefined,
      icon:"09d",
      error : undefined,
      loader : true
    }
  }
  getWeather = async (city) => {
    this.setState({
      error:null
    })
    if(city){
      this.setState({loader:true});
      const getWeatherCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      const response = await getWeatherCall.json();
      // Loading animasyonu bir süre gözükebilmesi için bekletiliyor.
      setTimeout(() => {
        if(response.cod !== "404"){
          this.setState({
            temprature:response.main.temp,
            city:response.name,
            humidity:response.main.humidity,
            wind:response.wind.speed,
            icon:response.weather[0].icon,
            error:"",
            loader:false
          })
        }
        else{
          this.setState({
            error:"Geçerli bir şehir adı giriniz."
          })
        }
      },1000)
    }
    else{
      this.setState({
        error:"Şehir ismi boş olmamalıdır."
      })
    }
  }
  componentDidMount(){
    this.getWeather(this.state.city);
  }
  render() {
    let errorElement;
    if(this.state.error){
      errorElement = <div className="errorContainer">{this.state.error}</div>;
    }
    return(
      <div>
        <Form loadWeather={this.getWeather}/>
        <Weather 
          temprature = {this.state.temprature}
          city = {this.state.city}
          humidity = {this.state.humidity}
          wind = {this.state.wind}
          loader = {this.state.loader}
          icon = {this.state.icon}
        />
        {errorElement}
      </div>
    )
  }
}

export default App;
