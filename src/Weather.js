import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a City.."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Pletenberg Bay</h1>
      <ul>
        <li>Tuesday 21:29</li>
        <li>light rain showers</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png "
              alt="Light rain showers"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">14</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 55%</li>
            <li>Humidity:85%</li>
            <li>Wind:8km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
