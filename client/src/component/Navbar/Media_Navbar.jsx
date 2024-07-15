import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Media_Navbar({
  className,
  active,
  handleActive,
  token,
  handleSocialMedia,
  logout,
  handleCloseHamburger,
}) {
  const [defaultList] = useState(false);

  return (
    <div className="navbar-media-query" onClick={handleCloseHamburger}>
      <div className={className} onClick={(e) => e.stopPropagation()}>
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
        <div className="social-media">
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
        </div>
        {token === null || token === "" || token === undefined ? (
          <Link to={"/login"} className={`go-auth`}>
            Login
          </Link>
        ) : (
          <div className={`go-auth`} onClick={logout}>
            Logout
          </div>
        )}
        <FontAwesomeIcon
          icon="fa-regular fa-circle-xmark"
          className="close-hamburger"
          onClick={handleCloseHamburger}
        />
      </div>
    </div>
  );
}

export default Media_Navbar;
