import "./Home.scss";
import Banner from "../../components/banner/Banner";
import Header from "../../components/header/Header";

const Home = () => {
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

      <Banner />
    </div>
  );
};

export default Home;
