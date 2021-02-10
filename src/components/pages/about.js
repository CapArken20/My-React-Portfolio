import React from "react";
import myImg from "../../../static/assets/images/about/me.jpg";

export default function () {
  return (
    <div className="page-wrapper">
      <div className="img-wrapper">
        <img src={myImg}/>
      </div>

      <div className="content-wrapper">
        <h1>Aric Bell</h1>
        <p>Hello there. I am Aric I have spent two years doing a Bottega coding course as a part of highschool. I finally finished and this is a part of the work I did.</p>
      </div>
    </div>
  );
}
