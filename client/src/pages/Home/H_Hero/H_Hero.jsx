import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../component/Navbar/Navbar";
import image from "./../../../assets/images/hand-drawn-board-games-element.png";

function H_Hero() {
  return (
    <>
      <div className="h-hero">
        <Navbar />
        <div className="h-hero-wrapper">
          <div className="main">
            <div className="welcome">
              <div className="line"></div>
              <span className="text">Welcome</span>
            </div>
            <div className="title">Monolita</div>
            <div className="description">
              Permainan edukatif yang bertujuan untuk meningkatkan pengetahuan
              literasi dan keterampilan pemain melalui interaksi dengan berbagai
              jenis kartu dan lokasi di peta Indonesia.
            </div>
            <Link className="button" to={"/how-to-play"}>
              Get Started
            </Link>
          </div>
          <div className="image">
            <img src={image} alt="hero image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default H_Hero;
