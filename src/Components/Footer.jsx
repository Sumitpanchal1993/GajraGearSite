import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footerBase">
        <div>
          <h3>Head Quater: Elve Corporation</h3>
          <h4>Elve Chambers</h4>
          <address>
            Green Street Fort, Mumbai - 400023 Maharashtra (INDIA)
          </address>
          <p>Tel: +91-22-22662088, 22661698, 22663527, 22663020</p>
          <p>Fax: +91-22-22662742 </p>
          <p>Email:elvgajra@bom3.vsnl.net.in, elve@gajra.com </p>
        </div>

        <div>
          <h3>Transmission Manufacturing:</h3>
          <h4>Gajra Gears Pvt. Ltd</h4>
          <address>Station Road, Dewas - 455001 Madhya Pradesh (INDIA)</address>
          <p>Tel: +91-7272-427500</p>
          <p>Fax: +91-7272-421002 </p>
          <p>Email: export@gajra.com </p>
        </div>

        <div>
          <h3>Differential Manufacturing:n</h3>
          <h4>Gajra Differential Gears pvt. Ltd</h4>
          <address>
            Lohar Pipliya, Near Kshipra A.B. Road, Dewas - 455001
          </address>
          <p>Tel: +91-7272-264151, 264152, 264153, 2641540</p>
          <p>Fax: +91-22-22662742 </p>
          <p>Email:gajradg@gajra.com </p>
        </div>

        <div>
          <h3>Social Media Connect </h3>
          <h4>Follow Us On:</h4>
          <ul>
            <li>
              <a>Linkedin</a>
            </li>
            <li>
              <a>Linkedin</a>
            </li>
            <li>
              <a>Linkedin</a>
            </li>
            <li>
              <a>Linkedin</a>
            </li>
            <li>
              <a>Linkedin</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
        }}
      >
        All Right Reserved Gajra Group of Companies{" "}
      </div>
    </>
  );
}
