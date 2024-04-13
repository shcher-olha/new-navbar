import React from "react";
import Footer from "./footer";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="main">
          <div
            className="image"
            style={{
              width: "100%",
              height: "500px",
              backgroundSize: "cover",
              backgroundImage: `url(${require("../images/logo.jpg")})`,
            }}
          >
            <p>Welcom to the world of Sushi</p>

            <div className="button">
              <a href="/" className="button-order-now" title="FOR ORDER NOW">
                Order Now
              </a>
              <a href="/" className="button-contact" title="Contact to us">
                Contact me
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
