import React from "react";
import SmoothScroll from "../../helper/SmoothScroll";
import G_Hero from "./G_Hero/G_Hero";
import G_Catalog from "./G_Catalog/G_Catalog";
import Footer from "../../component/Footer/Footer";

function Gallery() {
  return (
    <>
      <SmoothScroll />
      <G_Hero />
      <G_Catalog />
      <Footer />
    </>
  );
}

export default Gallery;
