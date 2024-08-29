import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import Hero from "./Hero";
import { useLocation } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const [isDroppedDown, setIsDroppedDown] = useState(false);
  function toggleDropDown() {
    setIsDroppedDown(!isDroppedDown);
  }
  const isLoggedIn = props.isLoggedIn;
  console.log(props.isLoggedIn);
  const endpoint = useLocation().pathname;
  const pathParam = props.getParams;
  let gradientHeight;

  console.log(endpoint, pathParam);

  switch (endpoint) {
    case "/":
      gradientHeight = { height: "680px" };
      break;
    case "/menu":
      gradientHeight = { height: "450px" };
      break;
    case "/carlstons-club":
      gradientHeight = { height: "450px" };
      break;
    case "/order-online":
      gradientHeight = { height: "250px" };
      break;
    case "/sustainability":
      gradientHeight = { height: "450px" };
      break;
    case "/about":
      gradientHeight = { height: "450px" };
      break;
    case "/contact":
      gradientHeight = { height: "450px" };
      break;
    default:
      if (endpoint.startsWith("/menu")) {
        gradientHeight = { height: "450px" };
      } else if (endpoint.startsWith("/order-online/")) {
        gradientHeight = { height: "450px" };
      } else if (endpoint.startsWith("/carlstons-club/")) {
        gradientHeight = { height: "250px" };
      } else if (endpoint.startsWith("/sustainability/")) {
        gradientHeight = { height: "409px" };
      } else {
        gradientHeight = { height: "680px" };
      }
  }

  useEffect(() => {
    const lastLogin = localStorage.getItem("lastLogin");
    if (lastLogin && new Date().getTime() - lastLogin > 6 * 60 * 60 * 1000) {
      handleLogout();
    }
  }, [handleLogout]);

  return (
    <div className="header">
      <div className="hero__Gradient" style={gradientHeight}></div>
      <div className="hero__Gradient second"></div>
      <div className="navbar">
        <a
          aria-label="Carlstons Coffee logo"
          className="logo"
          href="/carlstons-coffee"
        >
          <div>
            <div className="logo"> </div>
          </div>
        </a>
        <nav className="mainNav">
          <ul>
            <li className="navA_link">
              <a href="/carlstons-coffee/menu">Menu</a>
            </li>
            <li className="navA_link">
              <a href="/carlstons-coffee/carlstons-club">Carlstons Club</a>
            </li>
            <li className="navA_link">
              <a href="/carlstons-coffee/order-online/delivery">Order online</a>
            </li>
            <li className="navA_link">
              <a href="/carlstons-coffee/sustainability">Sustainability</a>
            </li>
            {/* <li className="navA_link">
              <a href="http://localhost:3001/">Gift Cards</a>
            </li> */}
          </ul>
        </nav>
        <div className="iconsBar">
          {/* <a href="/carlstons-coffee/locations/store-locator/map">
            <LocationOnIcon className="iconsBar__StoreLocatorIcon kAvAWB" />
          </a> */}
          <div
            onClick={toggleDropDown}
            role="button"
            tabIndex="0"
            aria-label="Account Menu"
            className="iconsBar__AccountDropdown"
          >
            <PersonIcon className="iconsBar__AvatarIcon kAvAWB" />
            {isDroppedDown && (
              <>
                {isLoggedIn ? (
                  <div className="iconsBar__DropdownContent on-login">
                    <a
                      href="/carlstons-coffee/carlstons-club/account"
                      className="btnDark"
                    >
                      Account
                    </a>

                    <a
                      href="/carlstons-coffee"
                      className="btnDark"
                      onClick={handleLogout}
                    >
                      Logout
                    </a>
                  </div>
                ) : (
                  <div className="iconsBar__DropdownContent">
                    <a
                      href="/carlstons-coffee/carlstons-club/login"
                      className="btnDark"
                    >
                      Log in
                    </a>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <Hero getParams={pathParam} />
    </div>
  );
}

export default Header;
