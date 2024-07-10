import React from "react";
import Card from "../../../component/Card/Card";
import image from "../../../assets/images/geography/image-20.webp";

function PapuaPegunungan() {
  return (
    <Card
      color="blue"
      locationChildren="Papua Pegunungan"
      imageChildren={image}
      titleChildren="Pegunungan Jayawijaya"
      descriptionChildren="Pegunungan Jayawijaya di Papua adalah pegunungan tertinggi di Indonesia, dengan Puncak Jaya setinggi 4.884 meter yang memiliki salju abadi. Suhu di puncak ini bisa mencapai 0°C hingga -10°C."
    />
  );
}

export default PapuaPegunungan;
