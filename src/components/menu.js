import React from "react";
import "./menu.css"
import rollsImage from "../images/rolls.jpg"

const Menu = () => {
  return (
    <>
      <div className="container">
        <h1>MENU</h1>
        <div className="row">
          <div className="col-6">
            <img src={rollsImage} alt="Rolls" className="image-rolls" />
          </div>
          <div className="col-6">
            <p className="text">
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
