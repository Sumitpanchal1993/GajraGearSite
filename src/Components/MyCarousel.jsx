import React, { useEffect } from "react";
import P1 from "../Media_File/P1.avif";
import P2 from "../Media_File/P2.jpg";
import P3 from "../Media_File/P3.jpg";
import "../Components/Carousel.css";

export default function Carousel() {
  let pics = [P1, P2, P3];
  useEffect(() => {
    let i = 0;
    setInterval(() => {
      let p = document.getElementById("display");
      p.src = pics[i];
      i++;
      if (i >= pics.length) {
        i = 0;
      }
    }, 5000);
  }, []);

  return (
    <>
      <div className="carousel">
        <button className="caro_left"> &lt; </button>
        <img id="display" src={P1} />
        <button className="caro_right"> &gt; </button>
      </div>
    </>
  );
}
