import React from "react";
import P1 from "../Media_File/P1.jpg";
import P2 from "../Media_File/P2.jpg";
import P3 from "../Media_File/P3.jpg";

function Carousel() {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={P1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={P2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={P3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <div
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </div>
        <div
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </div>
      </div>
    </>
  );
}

export default Carousel;
