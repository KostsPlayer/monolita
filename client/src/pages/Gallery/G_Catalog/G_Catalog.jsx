import React from "react";
import image1 from "./../../../assets/images/gallery/WhatsApp Image 2024-06-27 at 07.24.52_dc4b764e.jpg";
import image2 from "./../../../assets/images/gallery/WhatsApp Image 2024-06-27 at 07.24.56_58e53963.jpg";
import image3 from "./../../../assets/images/gallery/WhatsApp Image 2024-06-27 at 07.24.57_65bf452e.jpg";
import image4 from "./../../../assets/images/gallery/WhatsApp Image 2024-06-27 at 07.24.53_8dd77b4a.jpg";

function G_Catalog() {
  return (
    <>
      <div className="g-catalog">
        <div className="g-catalog-title">Galleries</div>
        <div className="g-catalog-wrapper">
          <div className="container">
            <img src={image1} alt="image-1" />
          </div>
          <div className="container">
            <img src={image2} alt="image-2" />
          </div>
          <div className="container">
            <img src={image3} alt="image-3" />
          </div>
          <div className="container">
            <img src={image4} alt="image-4" />
          </div>
        </div>
      </div>
    </>
  );
}

export default G_Catalog;
