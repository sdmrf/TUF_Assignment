import React, { useState, useEffect } from "react";
import "./Banner.scss";
import Tuf from "../../assets/TUF_logo_2.svg";

const Banner = ({ title, description, buttonText, timer, link, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(timer);

  useEffect(() => {
    if (timeLeft <= 0) {
      onClose();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, onClose]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return {
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  };

  const { hours, minutes, seconds } = formatTime(timeLeft);

  const handleButtonClick = () => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <div className="Banner">
      <div className="Banner-Left">
        <div className="Left-Up">
          <div className="Up-Left">
            <img src={Tuf} alt="TUF" />
          </div>
          <div className="Up-Right">
            <div className="Title">{title}</div>
            <div className="Description">{description}</div>
          </div>
        </div>
        <div className="Left-Down">
          <button onClick={handleButtonClick}>{buttonText}</button>
        </div>
      </div>
      <div className="Banner-Right">
        <div className="Timer">
          <span className="Hour">{hours}</span> : <span className="Minute">{minutes}</span> : <span className="Second">{seconds}</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
