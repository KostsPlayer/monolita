import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function H_Type() {
  return (
    <>
      <div className="h-type">
        <div className="h-type-title">Types of Card Monolita</div>
        <div className="h-type-wrapper">
          <div className="container">
            <div className="icon">
              <FontAwesomeIcon icon="fa-solid fa-info" />
            </div>
            <div className="subtitle">Kartu Informasi</div>
            <div className="description">
              Kartu yang diletakkan pada setiap daerah
            </div>
          </div>
          <div className="container">
            <div className="icon">
              <FontAwesomeIcon icon="fa-solid fa-question" />
            </div>
            <div className="subtitle">Kartu Kuis</div>
            <div className="description">
              Kartu pertanyaan yang diberikan kepada masing-masing peserta
            </div>
          </div>
          <div className="container">
            <div className="icon">
              <FontAwesomeIcon icon="fa-solid fa-gavel" />
            </div>
            <div className="subtitle">Kartu Sanksi</div>
            <div className="description">Kartu hiburan dalam permainan</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default H_Type;
