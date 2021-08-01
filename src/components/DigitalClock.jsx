import React, { useState } from "react";

const DigitalClock = () => {

    let newTime = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(newTime);

    const UpdatedTime = () => {
        newTime = new Date().toLocaleTimeString();
        setCurrentTime(newTime);
    };
    setInterval(UpdatedTime,1000);

  return (
    <>
        <div>
            <h1 className = "App-header"> { currentTime } </h1>
        </div>
    </>
  );
};

export default DigitalClock;