import "./Banner.scss";
import Tuf from "../../assets/TUF_logo_2.svg"

const Banner = () => {
  return (
    <div className="Banner">
      <div className="Banner-Left">
        <div className="Left-Up">
          <div className="Up-Left">
            <img src={Tuf} alt="TUF" />
          </div>
          <div className="Up-Right">
            <div className="Title">
              Elevate Your Learning Journey with TUF+ Course
            </div>
            <div className="Description">
              Curated learning, approach-wise solutions, personalized roadmaps,
              expert doubt assistance, and more!
            </div>
          </div>
        </div>
        <div className="Left-Down">
          <button>Explore Plus</button>
        </div>
      </div>
      <div className="Banner-Right">
        <div className="Timer">
          <span className="Hour">00</span> : <span className="Minute">01</span> : <span className="Second">20</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
