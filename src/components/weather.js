import React from "react";

 const Weather = props => (
    <div className="infoWeath">
    {props.city &&
        <div>
            <p>location: {props.city} {props.country} </p>
            <p>temperature: {props.temp}</p>
            <p>pressure: {props.pressure} </p>
            <p>sunrise: {props.sunrise}</p>
            <p>sunset: {props.sunset}</p>

        </div>

    }
    <p className="error">{props.error}</p>
        
    </div>
);
 

export default Weather;