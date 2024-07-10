import React from "react";
import Navbar from "../../../component/Navbar/Navbar";
import image from "./../../../assets/images/hand-drawn-board-games-element2.png";

function HTP_Hero() {
  return (
    <>
      <div className="htp-hero">
        <Navbar />
        <div className="htp-hero-wrapper">
          <div className="main">
            <div className="welcome">
              <div className="line"></div>
            </div>
            <div className="title">Let's Play</div>
            <div className="description">
              Silahkan scroll ke bawah untuk mengetahui bagaimana cara bermain
              dan mekanisme Monolita
            </div>
          </div>
          <div className="image">
            <img src={image} alt="hero image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HTP_Hero;
