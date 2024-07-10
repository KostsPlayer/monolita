import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "./../../../assets/images/flat-university-background.png";

function H_Benefit() {
  return (
    <>
      <div className="h-benefit">
        <div className="h-benefit-title">Benefits of Monolita</div>
        <div className="h-benefit-wrapper">
          <div className="wrapper-left">
            <img src={image} alt="image" />
          </div>
          <div className="wrapper-right">
            <div className="container">
              <FontAwesomeIcon className="icon" icon="fa-book-open-reader" />
              <span className="text">Peningkatkan Kemampuan Literasi</span>
            </div>
            <div className="container">
              <FontAwesomeIcon className="icon" icon="fa-face-laugh-beam" />
              <span className="text">Menyenangkan</span>
            </div>
            <div className="container">
              <FontAwesomeIcon className="icon" icon="fa-lightbulb" />
              <span className="text">Pemahaman Baru</span>
            </div>
            <div className="container">
              <FontAwesomeIcon className="icon" icon="fa-hand-holding-heart" />
              <span className="text">Kecintaan & Penghargaan</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default H_Benefit;
