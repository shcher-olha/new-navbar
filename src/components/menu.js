import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <>
      <div className="container">
        <h1>MENU</h1>
        <h2>Rolls</h2>
      </div>
      <div className="container-menu ms-5">
        <div className="row mb-5">
          <div className="col-6">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/rainbow-roll1-1657207643.jpg"
              alt="Logo"
              className="photo-rolls"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
