import React from "react";
import logo from "../assets/images/logo.png";

function Footer(): React.JSX.Element {
  return (
    <footer style={{ backgroundColor: "#FFCACA" }} className="py-1" id="footer">
      <div className="container">
        <div className="d-flex flex-wrap gap-5">
          <div className="footer-logo-wrapper d-flex align-items-center justify-content-center py-4 px-4">
            <img src={logo} alt="Vet Care λογότυπο" className="footer-logo" />
          </div>

          <div
            className="d-flex flex-wrap gap-5"
            style={{ marginLeft: "auto" }}
          >
            <div className="flex-fill py-4 footer-divider px-4 ">
              <h6 className="fw-bold mb-3" style={{ color: "#1038E0" }}>
                ΣΤΟΙΧΕΙΑ ΕΠΙΚΟΙΝΩΝΙΑΣ
              </h6>
              <ul className="list-unstyled" style={{ color: "#1038E0" }}>
                <li className="mb-2">
                  <strong>Διεύθυνση</strong>
                  <br />
                  Λεωφόρος Πάρκου 118, Μαρούσι, Τ.Κ. 15124
                </li>
                <li className="mb-2">
                  <strong>Τηλέφωνο</strong>
                  <br />
                  210 645 7821
                </li>
                <li className="mb-2">
                  <strong>Κινητό</strong>
                  <br />
                  697 845 2316
                </li>
                <li>
                  <strong>Email</strong>
                  <br />
                  info@vetcare-demo.gr
                </li>
              </ul>
            </div>

            <div className="py-4 px-4 schedule-info">
              <h6 className="fw-bold mb-3" style={{ color: "#1038E0" }}>
                ΩΡΑΡΙΟ ΛΕΙΤΟΥΡΓΙΑΣ
              </h6>
              <ul className="list-unstyled" style={{ color: "#1038E0" }}>
                <li className="mb-2">
                  <strong>09:00 – 20:00</strong>
                  <br />
                  Δευτέρα – Παρασκευή
                </li>
                <li className="mb-2">
                  <strong>09:00 – 14:00</strong>
                  <br />
                  Σάββατο
                </li>
                <li>
                  <strong>Κλειστά</strong>
                  <br />
                  Κυριακή
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
