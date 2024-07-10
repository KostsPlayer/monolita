import React from "react";
import SmoothScroll from "../../helper/SmoothScroll";
import H_Hero from "./H_Hero/H_Hero";
import H_Reason from "./H_Reason/H_Reason";
import H_Type from "./H_Type/H_Type";
import H_Benefit from "./H_Benefit/H_Benefit";
import Footer from "../../component/Footer/Footer";

function Home() {
  return (
    <>
      <SmoothScroll />
      <H_Hero />
      <H_Reason />
      <H_Benefit />
      <H_Type />
      <Footer />
    </>
  );
}

export default Home;
