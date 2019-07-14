import React from "react";

class Weather extends React.Component{
    render(){
        return(
            <div id="weather_wrapper">
                <div className={"loader " + (this.props.loader ? "show" : "hide")}><img src="./loader.svg" alt="loader"></img></div>
                <div className="weatherCard">
                <div className="currentTemp">
                    <span className="temp">{Math.round(this.props.temprature)}&deg;</span>
                    <span className="location">{this.props.city}</span>
                </div>
                <div className="currentWeather">
                    <span className="conditions"><img src={"http://openweathermap.org/img/wn/"+this.props.icon+"@2x.png"} alt="hava durumu ikonu"></img></span>
                    <div className="info">
                    <span className="rain">{this.props.humidity} %</span>
                    <span className="wind">{this.props.wind} m/s</span>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Weather;