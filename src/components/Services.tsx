import React from "react";
import ServiceCard from "./ServiceCard";

// ============================================
// ΤΑ 6 IMPORTS ΤΩΝ ΕΙΚΟΝΙΔΙΩΝ
// ============================================
// Κάθε ένα φέρνει μια εικόνα από το src/assets/images και της δίνει ένα
// όνομα μεταβλητής. Πρόσαρμοσε τα ΟΝΟΜΑΤΑ ΑΡΧΕΙΩΝ (π.χ. "checkup-icon.png")
// ώστε να ταιριάζουν ΑΚΡΙΒΩΣ με τα δικά σου αρχεία.
import checkupIcon from "../assets/icons/checkup-icon.png";
import vaccineIcon from "../assets/icons/vaccine-icon.png";
import diagnosticIcon from "../assets/icons/diagnostic-icon.png";
import surgeryIcon from "../assets/icons/surgery-icon.png";
import dentalIcon from "../assets/icons/dental-icon.png";
import preventionIcon from "../assets/icons/prevention-icon.png";

// ΑΛΛΑΓΗ: αντί για string "bi-heart-pulse", βάζουμε τη ΜΕΤΑΒΛΗΤΗ
// (checkupIcon) που προήλθε από το import παραπάνω. Παρατήρησε ΔΕΝ
// βάζουμε εισαγωγικά γύρω από το checkupIcon - είναι μεταβλητή, όχι κείμενο.
const services = [
  {
    iconSrc: checkupIcon,
    title: "ΓΕΝΙΚΗ ΚΛΙΝΙΚΗ ΕΞΕΤΑΣΗ",
    description:
      "Πλήρης έλεγχος της υγείας του κατοικιδίου σας με στόχο την έγκαιρη διάγνωση και πρόληψη πιθανών προβλημάτων.",
  },
  {
    iconSrc: vaccineIcon,
    title: "ΕΜΒΟΛΙΑΣΜΟΙ",
    description:
      "Προγράμματα εμβολιασμού για σκύλους, γάτες και μικρά κατοικίδια, σύμφωνα με τις σύγχρονες κτηνιατρικές οδηγίες.",
  },
  {
    iconSrc: diagnosticIcon,
    title: "ΔΙΑΓΝΩΣΤΙΚΕΣ ΕΞΕΤΑΣΕΙΣ",
    description:
      "Αιματολογικές εξετάσεις, μικροβιολογικός έλεγχος και διαγνωστικές υπηρεσίες για γρήγορη και αξιόπιστη διάγνωση.",
  },
  {
    iconSrc: surgeryIcon,
    title: "ΧΕΙΡΟΥΡΓΙΚΕΣ ΕΠΕΜΒΑΣΕΙΣ",
    description:
      "Προγραμματισμένες χειρουργικές επεμβάσεις με σύγχρονο εξοπλισμό και ασφαλή αναισθησία.",
  },
  {
    iconSrc: dentalIcon,
    title: "ΟΔΟΝΤΙΑΤΡΙΚΗ ΦΡΟΝΤΙΔΑ",
    description:
      "Καθαρισμός δοντιών, αντιμετώπιση στοματικών παθήσεων και συμβουλές για τη σωστή στοματική υγιεινή.",
  },
  {
    iconSrc: preventionIcon,
    title: "ΠΡΟΛΗΨΗ & ΣΥΜΒΟΥΛΕΥΤΙΚΗ",
    description:
      "Καθοδήγηση για διατροφή, αποπαρασίτωση, πρόληψη ασθενειών και γενική φροντίδα του κατοικιδίου σας.",
  },
];

function Services(): React.JSX.Element {
  return (
    <section
      id="services"
      className="py-5"
      style={{ backgroundColor: "#FFCACA", fontFamily: "Future" }}
    >
      <div className="container">
        <h2
          className="text-center mb-5"
          style={{
            fontFamily: "AcidThick",
            fontSize: "5rem",
            color: "#1038E0",
          }}
        >
          Οι υπηρεσίες μας
        </h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              iconSrc={service.iconSrc}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
