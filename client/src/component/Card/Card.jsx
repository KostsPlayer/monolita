import React from "react";

function Card({
  locationChildren,
  imageChildren,
  titleChildren,
  descriptionChildren,
}) {
  return (
    <>
      <div className="card">
        <div className="card-location">
          {locationChildren}
          <div className="box">
            <div className="box-child"></div>
          </div>
        </div>
        <div className="card-image">
          <div className="wrapper">
            <img src={imageChildren} alt="" srcset="" />
          </div>
        </div>
        <div className="card-content">
          <div className="title">{titleChildren}</div>
          <div className="description">{descriptionChildren}</div>
        </div>
      </div>
    </>
  );
}

export default Card;
