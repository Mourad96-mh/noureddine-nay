import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const nav = [
  { to: "/", label: "La Légende" },
  { to: "/palmares", label: "Palmarès" },
  { to: "/sponsoring", label: "Sponsoring" },
  { to: "/partenariats", label: "Partenariats" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link to="/" className={styles.brandLink} aria-label="Noureddine Naybet — accueil">
            <span className={styles.logoMark}>NN</span>
            <span className={styles.logoName}>Noureddine Naybet</span>
          </Link>
          <p className={styles.tagline}>
            Icône de la nation · Légende du football mondial · Ambassadeur officiel pour
            l&apos;organisation de la Coupe du Monde 2030.
          </p>
        </div>

        <nav className={styles.nav} aria-label="Navigation du pied de page">
          {nav.map(({ to, label }) => (
            <Link key={to} to={to} className={styles.navLink}>
              {label}
            </Link>
          ))}
        </nav>

        <div className={styles.contact}>
          <span className={styles.contactTitle}>Partenariats &amp; Sponsoring</span>
          <a href="mailto:Chafikiii@yahoo.fr" className={styles.contactLink}>
            Chafikiii@yahoo.fr
          </a>
          <a href="tel:+33777449885" className={styles.contactLink}>
            +33 7 77 44 98 85
          </a>
          <span className={styles.contactCompany}>NATIS MARKETING — Nantes, France</span>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Noureddine Naybet. Tous droits réservés.
        </p>
        <Link to="/mentions-legales" className={styles.legalLink}>
          Mentions légales
        </Link>
      </div>
    </footer>
  );
}
