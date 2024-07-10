import React from "react";
import Navbar from "../../../component/Navbar/Navbar";
import image from "./../../../assets/images/gallery/WhatsApp Image 2024-06-27 at 07.24.55_0189e075.jpg";

function G_Hero() {
  return (
    <>
      <div className="g-hero">
        <Navbar />
        <div className="g-hero-wrapper">
          <div className="main">
            <div className="welcome">
              <div className="line"></div>
            </div>
            <div className="title">SDN 20 Benowo Surabaya</div>
            <div className="description">
              Monolita diperkenalkan pertama kali pada Senin, 20 Juli 2024, yang
              dilaksanakan di SDN 20 Benowo Surabaya dengan tujuan meningkatkan
              minat baca siswa. Setiap petak monopoli berisi tantangan literasi
              yang edukatif dan menyenangkan, mendorong semangat membaca dan
              mendengar serta kerjasama antar siswa.
            </div>
          </div>
          <div className="image">
            <img src={image} alt="image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default G_Hero;
