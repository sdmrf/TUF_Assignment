import React, { useState } from "react";
import "./Home.scss";
import Banner from "../../components/banner/Banner";

const Home = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleClose = () => {
    setIsBannerVisible(false);
  };

  return (
    <div className="Home">
      <div className="Content">
        <div className="Title">
          Gear Up for <span>Success:</span> Your Ultimate Preparation Hub!
        </div>
        <div className="Description">
          Navigate Your Learning Adventure: Explore DSA, Master CS Concepts,
          Design Systems, Hone Competitive Skills, and Ace Interviews
          Effortlessly
        </div>
      </div>

      {isBannerVisible && (
        <Banner
          title="Elevate Your Learning Journey with TUF+ Course"
          description="Curated learning, approach-wise solutions, personalized roadmaps, expert doubt assistance, and more!"
          buttonText="Explore Plus"
          timer={60}
          link="https://takeuforward.org/plus"
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default Home;
