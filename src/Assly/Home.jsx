import React from "react";
import "./Home.css";
import Carousel from "../Components/Carousel";
import image from "../Media_File/img_comp.jpg";

export default function Home() {
  return (
    <div className="base">
      {/* <Carousel /> */}
      <div className="home">
        <div className="card">
          <h1>Group Profile</h1>
          <p>
            The Gajra Group made its beginnings in 1950 with the formation of
            Elve Corporation. Originally trading in diesel engines and spares it
            then moved on to making Gears in 1962 with the set up of Gajra
            Gears. After establishing a name in automotive gears the group
            further added to its capabilities by setting up Gajra Differential
            Gears in 1991. With a modest beginning the group has over the years
            expanded its product range. The Gajra Group now offers transmission
            and differential gears, cutting tools and toolings (jigs, fixtures)
            that serve the purpose of manufacturing these gears, material
            handling pallets for the safe movement of these goods and machined
            castings and assemblies. What drives this growth at Gajra is
            commitment to top quality by following good manufacturing practices
            and providing outstanding customer service.
          </p>
        </div>
        <img src={image} alt="Image" />
      </div>
    </div>
  );
}
