import React, { useEffect, useMemo } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import AlertMessage from "../../helper/AlertMessage";
import { ToastContainer } from "react-toastify";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import { QRCodeCanvas } from "qrcode.react";

function Game() {
  axios.defaults.withCredentials = true;

  const getLocations = [
    "Sulawesi Tenggara",
    "Jawa Timur",
    "Papua Pegunungan",
    "Sumatra Utara",
    "Welcome",
    "Kalimantan Barat",
    "",
    "",
    "",
    "Bali",
    "Maluku",
    "",
    "",
    "",
    "Kalimantan Timur",
    "Start",
    "Nusa Tenggara Barat",
    "Daerah Istimewa Yogyakara",
    "Sulawesi Selatan",
    "Papua Tengah",
  ];

  const locations = useMemo(() => getLocations, []);

  const navigate = useNavigate();
  const location = useLocation();
  const { toastMessage } = AlertMessage();

  useEffect(() => {
    if (location.state?.messageLogin) {
      toastMessage("success", location.state.messageLogin);
      navigate(location.pathname, {
        state: { ...location.state, messageLogin: undefined },
        replace: true,
      });
    }
  }, [location.state, location.pathname, navigate, toastMessage]);

  return (
    <>
      <div className="game">
        <Navbar defaultList={false} />

        <div className="game-wrapper">
          {locations.map((location, index) => {
            const valueContainer = location !== "";

            return (
              <div className="location-container" key={index}>
                <div className="text">{location}</div>
                {valueContainer &&
                  (location === "Jawa Timur" ? (
                    <div className="qr">
                      <QRCodeCanvas
                        size={132}
                        value="https://monolita.vercel.app/"
                      />
                    </div>
                  ) : location === "Papua Pegunungan" ? (
                    <div className="qr">
                      <QRCodeCanvas
                        size={132}
                        value="https://monolita.vercel.app/"
                      />
                    </div>
                  ) : (
                    <div className="qr">
                      <QRCodeCanvas size={132} value="https://www.google.com/" />
                    </div>
                  ))}
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default Game;
