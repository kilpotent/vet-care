import React from "react";
import heroImage from "../assets/images/hero-dog-cat.jpg";
import pawIcon from "../assets/icons/paw-icon.png";

function Hero(): React.JSX.Element {
  return (
    <div className="position-relative">
      <img
        src={heroImage}
        alt="Χρυσό retriever και γάτα, φροντίδα κατοικιδίων"
        className="w-100 hero-image"
        style={{ objectFit: "cover" }}
      />

      <div className="position-absolute hero-text-box">
        <h1 className="hero-title d-flex align-items-start flex-wrap">
          <span>
            Φροντίδα που αξίζει
            <img src={pawIcon} alt="" className="hero-paw ms-4" />
          </span>
          <span className="w-100">ο καλύτερός σας φίλος!</span>
        </h1>

        <p className="mt-3 hero-subtitle">
          Εξατομικευμένες κτηνιατρικές υπηρεσίες για σκύλους, γάτες &amp; μικρά
          κατοικίδια.
        </p>
      </div>
    </div>
  );
}

export default Hero;
