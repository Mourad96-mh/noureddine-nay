import Seo from "../components/Seo.jsx";
import { SITE_URL } from "../config.js";
import styles from "./Partenariats.module.css";

const formats = [
  "Contrat d'impact à long terme d'ambassadeur de votre marque, qui peut démarrer dès aujourd'hui et courir jusqu'en 2030",
  "Contrat ponctuel de relations publiques, d'événementiels et d'hospitalités VIP",
  "Contrat de marketing digital, de contenu et d'influence",
];

// visuels du dossier « partenariats images », dans l'ordre numéroté du client
const actionImages = [
  {
    src: "/imgs/partenariats/03-mondial-2030.jpeg",
    alt: "Affiche officielle de la Coupe du Monde FIFA 2030 : Maroc, Espagne, Portugal",
  },
];

export default function Partenariats() {
  return (
    <>
      <Seo
        title="Partenariats — Noureddine Naybet | Site Officiel"
        description="Les formats de contrats de collaboration avec Noureddine Naybet : ambassadeur de marque à long terme jusqu'en 2030, relations publiques et hospitalités VIP, marketing digital de contenu et d'influence. Partenaire officiel : TotalEnergies."
        path="/partenariats"
        image={`${SITE_URL}/imgs/partenariats/02-tirage-fifa.jpeg`}
      />

      <div className={styles.grid}>
        <div className={styles.cellPortrait}>
          <img
            src="/imgs/partenariats/01-portrait-plateau.jpeg"
            alt="Noureddine Naybet, invité d'un plateau de télévision"
            loading="eager"
          />
        </div>

        <div className={styles.cellText}>
          <span className={styles.eyebrow}>Partenariats</span>
          <h1 className={styles.name}>Noureddine Naybet</h1>
          <p className={styles.intro}>
            Aujourd&apos;hui, la légende Noureddine Naybet est engagée officiellement avec{" "}
            <strong>TotalEnergies</strong>. Voici les différents formats de contrats, bénéfiques aux
            deux parties.
          </p>

          <ol className={styles.valuesList}>
            {formats.map((format, index) => (
              <li key={format}>
                <span className={styles.formatNum}>{String(index + 1).padStart(2, "0")}</span>
                {format}
              </li>
            ))}
          </ol>

          <div className={styles.partner}>
            <span className={styles.partnerLabel}>Partenaire officiel</span>
            <span className={styles.partnerName}>TotalEnergies</span>
          </div>
        </div>

        <div className={styles.cellPhoto}>
          <img
            src="/imgs/partenariats/02-tirage-fifa.jpeg"
            alt="Noureddine Naybet lors d'un tirage au sort officiel de la FIFA"
            loading="eager"
          />
        </div>

        <div className={styles.cellAction}>
          {actionImages.map((image) => (
            <div key={image.alt} className={styles.actionItem}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
