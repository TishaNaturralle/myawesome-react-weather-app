import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  const apiKey = "73a00877081bd43422bdee0f3022beb5";
  let formattedCity = city.split(" ").join("%20");
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${formattedCity}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}
if (weatherData.ready) {
  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              autoFocus="on"
              onChange={handleCityChange}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <WeatherInfo data={weatherData} />
      <WeatherForecast coordinates={weatherData.coordinates} />
    </div>
  );
} else {
  search();
  return "Loading...";
}
