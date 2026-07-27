import React from "react";
import logo from "../assets/images/logo.png";

function Navbar(): React.JSX.Element {
  return (
    <nav
      className="navbar navbar-expand-lg py-2 custom-navbar"
      style={{
        backgroundColor: "#f7c9d3",
        zIndex: 10,
        fontFamily: "Future",
        objectFit: "cover",
        objectPosition: "center 15%",
      }}
    >
      <div className="container-fluid px-4">
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img
            src={logo}
            alt="Vet Care λογότυπο"
            style={{ height: "40px", marginRight: "10px" }}
          />
          <span style={{ color: "#1038E0", fontWeight: "bold" }}></span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Εναλλαγή πλοήγησης"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          style={{ fontFamily: "Future" }}
          className="collapse navbar-collapse justify-content-end"
          id="navMenu"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link fw-bold"
                href="#services"
                style={{ color: "#1038E0" }}
              >
                ΥΠΗΡΕΣΙΕΣ
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link fw-bold"
                href="#about"
                style={{ color: "#1038E0" }}
              >
                ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link fw-bold"
                href="#footer"
                style={{ color: "#1038E0" }}
              >
                ΕΠΙΚΟΙΝΩΝΙΑ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
