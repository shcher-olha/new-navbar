import React from "react";
import "./menu.css";
import rollsImage from "../images/rolls.jpg";

const Menu = () => {
  return (
    <>
      <div className="container">
        <h1>MENU</h1>
        <h2>Rolls</h2>
      </div>
      <div className="row">
        <div className="col-6 ms-5">
          <img src={rollsImage} alt="Rolls" className="img-fluid" />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-6 ms-5">
          <img src={rollsImage} alt="Rolls" className="img-fluid" />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-6 ms-5">
          <img src={rollsImage} alt="Rolls" className="img-fluid" />
        </div>
      </div>
    </>
  );
};

export default Menu;
