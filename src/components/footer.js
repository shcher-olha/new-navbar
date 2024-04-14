import React from "react";
import "./footer.css";
import { FaInstagram } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-sm-6">
            <h4>CONTACT US</h4>

            <ul className="list">
              <li className="item">
                {" "}
                <a
                  href="https://www.google.com/intl/ru/gmail/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdAlternateEmail className="icon" />
                </a>
                <span>sushi@gmail.com</span>
              </li>
              <li className="item">
                <a
                  href="https://pics.wikireality.ru/upload/b/be/Instagram_Logo2016.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="icon" />
                </a>
                <span>our instagram</span>
              </li>
              <li className="item">
                {" "}
                <a
                  href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcResi1InzF4_FNunx9qnKEkdf-nwlke8mWhScv3zVtjEA&s"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegramPlane className="icon" />
                </a>
                <span>our instagram</span>
              </li>
            </ul>
          </div>
          <div className="col-sm-6">
            <h4>OUR LOCATION</h4>
            <ul className="list">
              <li className="item">
                <a
                  href="https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Vaduz-castle.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaMapMarkerAlt className="icon" />
                </a>
                <span>Vaduz</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
