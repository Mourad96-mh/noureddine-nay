import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import styles from "./Boutique.module.css";

export default function Boutique() {
  return (
    <>
      <Seo
        title="Boutique — En construction | Noureddine Naybet"
        description="La boutique officielle Noureddine Naybet arrive bientôt."
        path="/boutique"
        noindex
      />

      <div className={styles.construction}>
        <div className={styles.inner}>
          <span className={styles.icon} aria-hidden="true">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
          </span>
          <p className={styles.eyebrow}>Boutique officielle</p>
          <h1 className={styles.title}>En construction</h1>
          <p className={styles.text}>
            La boutique officielle Noureddine Naybet sera bientôt disponible.
            <br />
            Revenez prochainement pour découvrir la collection.
          </p>
          <div className={styles.divider} />
          <p className={styles.contact}>
            Pour toute demande de produit ou de partenariat, écrivez-nous via la page{" "}
            <Link to="/contact" className={styles.link}>
              Contact
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
