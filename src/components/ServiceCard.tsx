import React from "react";

interface ServiceCardProps {
  // ΑΛΛΑΓΗ: πριν ήταν "όνομα κλάσης bootstrap icon", τώρα είναι
  // "το αποτέλεσμα ενός image import" - και οι δύο είναι τεχνικά strings,
  // αλλά η σημασία τους είναι διαφορετική. Το ονομάζω iconSrc τώρα για
  // να είναι σαφές ότι πρόκειται για πηγή εικόνας (image source).
  iconSrc: string;
  title: string;
  description: string;
}

function ServiceCard({
  iconSrc,
  title,
  description,
}: ServiceCardProps): React.JSX.Element {
  return (
    <div className="text-center service-card">
      <div
        className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3"
        style={{ width: "70px", height: "70px", backgroundColor: "#FFCACA" }}
      >
        {/*
          ΑΛΛΑΓΗ ΕΔΩ: αντί για <i className="bi ..."> (γραμματοσειρά
          εικονιδίου), βάζουμε κανονικό <img>. Η λογική κεντραρίσματος
          (d-inline-flex + align-items-center + justify-content-center)
          παραμένει ΙΔΙΑ - αυτό είναι το ωραίο με το flexbox, δεν σε
          νοιάζει τι υπάρχει μέσα (εικονίδιο-γραμματοσειρά ή εικόνα),
          το κεντράρει το ίδιο.
        */}
        <img
          src={iconSrc}
          alt={title}
          style={{ width: "40px", height: "40px", objectFit: "contain" }}
        />
        {/*
          width/height: "36px" = ελέγχουμε εμείς πόσο μεγάλο θα είναι το
             εικονίδιο μέσα στο 70x70px τετράγωνο (αφήνει ωραίο περιθώριο
             γύρω του, όπως στη φωτογραφία σου).
          objectFit: "contain" = ΔΙΑΦΟΡΕΤΙΚΟ από το "cover" που είδαμε στο
             Hero! Το "contain" λέει "χώρεσε ΟΛΗ την εικόνα μέσα στο κουτί,
             ΧΩΡΙΣ να κόψεις τίποτα, ακόμα κι αν μείνει λίγο κενό χώρος".
             Το χρησιμοποιούμε εδώ (αντί για "cover") γιατί σε εικονίδια
             ΔΕΝ θέλουμε να κοπεί τίποτα από τις άκρες - θέλουμε να
             φαίνεται ΟΛΟΚΛΗΡΟ το σχέδιο.
        */}
      </div>

      <h5 className="fw-bold mb-2" style={{ color: "#1038E0" }}>
        {title}
      </h5>

      <p style={{ color: "#1038E0", fontSize: "1rem", fontFamily: "Future" }}>
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;
