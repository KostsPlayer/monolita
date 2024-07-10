import React from "react";
import Card from "../../../component/Card/Card";
import image from "../../../assets/images/geography/Semeru.jpg";

function JawaTimur() {
  return (
    <Card
      color="purple"
      locationChildren="Jawa Timur"
      imageChildren={image}
      titleChildren="Gunung Semeru"
      descriptionChildren="Gunung Semeru, gunung tertinggi di Jawa Timur setinggi 3.676 meter, terbentuk dari subduksi Lempeng Indo-Australia. Ini adalah gunung berapi tertinggi ketiga di Indonesia dengan kawah puncaknya bernama Jonggring Saloko."
    />
  );
}

export default JawaTimur;
