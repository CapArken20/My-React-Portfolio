import React from "react";
import loginImg from "../../../static/assets/images/auth/login.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function() {
  return (
    <div className="page-wrapper">
      <div className="img-wrapper">
        <img src={loginImg}/>
      </div>

      <div className="content-wrapper">
        <h1>Contact Me</h1>
        <p> <FontAwesomeIcon icon="phone" /> 530-917-6717</p>
        <p> <FontAwesomeIcon icon="envelope" /> aizhe5757@gmail.com</p>
        <p> <FontAwesomeIcon icon="map-marked-alt" /> Dayton, Ohio</p>
      </div>
    </div>
  );
}
