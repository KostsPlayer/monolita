import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import Token from "../../helper/Token";
import axios from "axios";
import ApiUrl from "../../helper/ApiUrl";

function Footer() {
  const navigate = useNavigate();
  const { token } = Token();
  const { apiLogoutUrl } = ApiUrl();

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

  return (
    <>
      <div className="footer">
        <div className="footer-top">
          <Link to={"/"} className="logo">
            Monolita
          </Link>
          <div className="list">
            <Link to={"/"} className="list-link">
              Home
            </Link>
            <Link to={"/how-to-play"} className="list-link">
              How to Play
            </Link>
            <Link to={"/gallery"} className="list-link">
              Gallery
            </Link>
            {/* <Link to={"/contact"} className="list-link">
              Contact
            </Link> */}
            {token === null || token === "" || token === undefined ? (
              ""
            ) : (
              <Link className={`list-link `} to="/game">
                Game
              </Link>
            )}
          </div>
          <div className="icon">
            <FontAwesomeIcon
              className="icon-social"
              icon="fa-brands fa-facebook"
            />
            <FontAwesomeIcon
              className="icon-social"
              icon="fa-brands fa-instagram"
            />
            <FontAwesomeIcon
              className="icon-social"
              icon="fa-brands fa-twitter"
            />
            <FontAwesomeIcon
              className="icon-social"
              icon="fa-brands fa-youtube"
            />
            {token === null || token === "" || token === undefined ? (
              ""
            ) : (
              <FontAwesomeIcon
                className="icon-social"
                icon="fa-solid fa-right-from-bracket"
                onClick={logout}
              />
            )}
          </div>
        </div>
        <div className="footer-bottom">
          <span className="copy-right">Copyright &copy; 2024 Monolita</span>
          <span className="powered">Powered by Monolita</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
