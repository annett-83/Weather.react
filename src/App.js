import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const APP_KEY = "20c405395edeac28142e377444ecc4f3";


class App extends React.Component {
  state = {
    temp: undefined,
    pressure:undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined

  }

  gettingWeather = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;

    if(city) {
      const api_url = await
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_KEY}&units=metric`);
      const data = await api_url.json();


      let sunset = data.sys.sunset;
      let date = new Date();
      date.setTime(sunset);
      let sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      //если не написать код для восхода солнца, то он будет выводиться в секндах с 19-какого-то. 

      this.setState( {
        temp: data.main.temp,
        pressure:data.main.pressure ,
        city: data.name,
        country: data.sys.country,
        sunrise: data.sys.sunrise,
        sunset: sunset_date,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        pressure:undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error:"Enter the name of the city"

      });
      

    }
      
  }
   
  render() {
    return(
        <div className="warapper">
          <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                <Info/>
              </div>
              <div className="col-sm-7 form">
              <Form weatherMethod={this.gettingWeather} />
                <Weather
                temp={this.state.temp}
                pressure={this.state.pressure}
                city={this.state.city}
                country={this.state.country}
                sunrise={this.state.sunrise}
                sunset={this.state.sunset}
                error={this.state.error}
                />
              </div>
            </div>
            </div>
          </div> 
      </div>

    );
  }
}

export default App;
