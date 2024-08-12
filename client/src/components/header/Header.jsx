import "./Header.scss";
import Logo from "../../assets/TUF_logo.svg";

const Header = () => {
  return (
    <div className="Header">
        <div className="Logo">
            <img src={Logo} alt="Logo" />
        </div>
    </div>
  )
}

export default Header