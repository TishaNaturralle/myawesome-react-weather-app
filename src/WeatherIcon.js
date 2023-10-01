import React from "react";

export default function Weather() {
  const defaults = {
    icon: "CLEAR_DAY",
    color: "#facf5a",
    size: 50,
    animate: true,
  };
  return (
    <div className="Weather">
      <Weather
        icon={defaults.icon}
        color={defaults.color}
        size={defaults.size}
        animate={defaults.animate}
      />
    </div>
  );
}
