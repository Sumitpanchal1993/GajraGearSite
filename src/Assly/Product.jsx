import React from "react";
import Sample from "../Media_File/Sample.jpg";

export default function Product() {
  return (
    <div className="base">
      <div>
        <h1>Type of Gear</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque nulla,
          libero fugiat impedit ratione rem exercitationem laudantium non sunt
          praesentium magnam error, dolorem officiis autem dicta laboriosam.
          Voluptas aperiam tenetur enim praesentium impedit earum officiis
          nesciunt ipsa id ut, at omnis reiciendis ipsam quia obcaecati totam ab
          delectus dolor. Nulla?
        </p>
      </div>
      <div>
        <img src={Sample} alt="sample_image" />
      </div>
    </div>
  );
}
