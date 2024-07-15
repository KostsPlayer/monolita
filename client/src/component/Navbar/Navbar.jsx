import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Token from "../../helper/Token";
import ApiUrl from "../../helper/ApiUrl";
import Media_Navbar from "./Media_Navbar";
import { faL } from "@fortawesome/free-solid-svg-icons";

function Navbar({ defaultList = true }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [active, setActive] = useState(location.pathname);
  const [openHamburger, setOpenHamburger] = useState(false);

  const { token } = Token();
  const { apiLogoutUrl } = ApiUrl();

  const handleActive = useCallback(
    (path) => {
      setActive(path);
    },
    [setActive]
  );

  const handleSocialMedia = (url) => {
    if (url && typeof url === "string" && url.startsWith("https")) {
      window.location.href = url;
    } else {
      console.error("Invalid URL");
    }
  };

  const logout = useCallback(async () => {
    localStorage.removeItem("token");

    await axios
      .delete(apiLogoutUrl)
      .then((res) => {
        if (res.status === 200) {
          navigate("/login", {
            state: {
              messageLogout: res.data.message,
            },
          });
        }
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [navigate]);

  const handleOpenHamburger = () => {
    setOpenHamburger(true);
  };

  const handleCloseHamburger = () => {
    setOpenHamburger(false);
  };

  useEffect(() => {
    console.log(openHamburger);
  });

  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <Link to={"/"} className="logo">
            Monolita
          </Link>
          <div className="list">
            <Link
              className={`list-link  ${active === "/" ? "active" : ""}`}
              to="/"
              onClick={() => handleActive("/")}
            >
              Home
            </Link>
            <Link
              className={`list-link  ${
                active === "/how-to-play" ? "active" : ""
              }`}
              to="/how-to-play"
              onClick={() => handleActive("/how-to-play")}
            >
              How to Play
            </Link>
            <Link
              className={`list-link  ${active === "/gallery" ? "active" : ""}`}
              to="/gallery"
              onClick={() => handleActive("/gallery")}
            >
              Gallery
            </Link>
            {/* <Link
              className={`list-link  ${active === "/contact" ? "active" : ""}`}
              to="/contact"
              onClick={() => handleActive("/contact")}
              >
              Contact
              </Link> */}
            {token === null || token === "" || token === undefined ? (
              ""
            ) : (
              <Link
                className={`list-link  ${active === "/game" ? "active" : ""}`}
                to="/game"
                onClick={() => handleActive("/game")}
              >
                Game
              </Link>
            )}
          </div>
        </div>
        <div className="navbar-right">
          <FontAwesomeIcon
            className={`${defaultList ? "" : "brown"} social-icon`}
            icon="fa-brands fa-facebook"
            onClick={() => handleSocialMedia("https://www.facebook.com")}
          />
          <FontAwesomeIcon
            className={`${defaultList ? "" : "brown"} social-icon`}
            icon="fa-brands fa-instagram"
            onClick={() => handleSocialMedia("https://www.instagram.com")}
          />
          <FontAwesomeIcon
            className={`${defaultList ? "" : "brown"} social-icon`}
            icon="fa-brands fa-twitter"
            onClick={() => handleSocialMedia("https://x.com/")}
          />
          <FontAwesomeIcon
            className={`${defaultList ? "" : "brown"} social-icon`}
            icon="fa-brands fa-youtube"
            onClick={() => handleSocialMedia("https://youtube.com/")}
          />
          {token === null || token === "" || token === undefined ? (
            <Link to={"/login"} className={`go-auth `}>
              Login
            </Link>
          ) : (
            <FontAwesomeIcon
              icon="fa-solid fa-right-from-bracket"
              className={`${defaultList ? "" : "brown"} social-icon`}
              onClick={logout}
            />
          )}
        </div>
        <FontAwesomeIcon
          icon="fa-solid fa-bars"
          className="hamburger"
          onClick={handleOpenHamburger}
        />
        {openHamburger ? (
          <Media_Navbar
            className={`media-wrapper ${openHamburger ? "open" : ""}`}
            active={active}
            handleActive={handleActive}
            token={token}
            handleSocialMedia={handleSocialMedia}
            logout={logout}
            handleCloseHamburger={handleCloseHamburger}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Navbar;
