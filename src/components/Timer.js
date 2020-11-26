import React from "react";
import "./App.css";
import Timer from 'react-compound-timer'

const clock = () => {
  return (
    <div className="clock">
      <Timer>
        <Timer.Days /> days &nbsp;
        <Timer.Hours /> hours &nbsp;
        <Timer.Minutes /> minutes &nbsp;
        <Timer.Seconds /> seconds
      </Timer>
    </div>
  );
};

export default clock;
