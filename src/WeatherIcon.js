import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon() {
  const defaults = {
    icon_url:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png",
    color: "#facf5a",
    size: 50,
    animate: true,
  };
  return (
    <div className="Weather">
      <ReactAnimatedWeather
        icon={defaults.icon}
        color={defaults.color}
        size={defaults.size}
        animate={defaults.animate}
      />
    </div>
  );
}
