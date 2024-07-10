import React from "react";
import SmoothScroll from "./../../helper/SmoothScroll";
import Footer from "../../component/Footer/Footer";
import HTP_Hero from "./HTP_Hero/HTP_Hero";
import HTP_Rules from "./HTP_Rules/HTP_Rules";

function HowToPlay() {
  return (
    <>
      <SmoothScroll />
      <HTP_Hero />
      <HTP_Rules />
      <Footer />
    </>
  );
}

export default HowToPlay;
