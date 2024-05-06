import React from "react";
import Carousel from "../Components/Carousel";

export default function Career() {
  return (
    <>
      <div>
        {/* <div><Carousel /></div> */}
        <div className="base">
          <div className="title">
            <h1>Work With US</h1>
          </div>
          <hr />
          <div>
            <h2>Life At Gajra </h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio delectus numquam itaque vel! Natus, cupiditate corporis voluptate blanditiis voluptatem suscipit iure facere voluptatum laborum necessitatibus at in vitae! Tenetur, voluptate!</p>
          </div>
          <hr />
          <div>
            <h2>Extreme Opportunioty for Growth</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis quo non modi necessitatibus voluptas repellendus ea cum saepe. Nobis temporibus quis voluptatem veritatis quaerat deleniti iste sed eaque aspernatur maxime!</p>
          </div>
          <hr />
          <div className="careerForm">
            <h2>Fill The Details and Get in Contact with us</h2>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id=""  placeholder="Full Name"/>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id=""  placeholder="Email"/>
            </div>
            <div>
              <label htmlFor="name">Contact Detail</label>
              <input type="text" name="contact" id=""  placeholder="Contact Number"/>
            </div>
            <div>
              <label htmlFor="name">Department Applying For:</label>
              <input type="text" name="" id=""  placeholder="Department for Which you wan to apply"/>
            </div>
            <div>
              <label htmlFor="name">Department Applying For:</label>
              <input type="text" name="" id=""  placeholder="Department for Which you wan to apply"/>
            </div>
            <div>
              <label htmlFor="name">Work Experience</label>
              <input type="text" name="" id=""  placeholder="Experiece in Years"/>
            </div>
            <div>
              <label htmlFor="name">Current Organisation</label>
              <input type="text" name="" id=""  placeholder="Current Company"/>
            </div>
            <div>
              <label htmlFor="name">Qualification</label>
              <input type="text" name="" id=""  placeholder="hiegeast Qualification"/>
            </div> <div>
              <label htmlFor="name">Upload Resume</label>
              <input type="file" name="" id=""  placeholder="Latest resume"/>
            </div> <div>
              <label htmlFor="name">Detail About You</label>
              <input type="text" name="" id=""  placeholder="About you Detail"/>
            </div>
            <div>
              <button>Submit</button>
            </div>
          </div>

         
        </div>
      </div>
    </>
  );
}
