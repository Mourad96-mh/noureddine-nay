import Seo from "../components/Seo.jsx";
import { SITE_URL } from "../config.js";
import styles from "./Partenariats.module.css";

const formats = [
  "Contrat d'impact à long terme d'ambassadeur de votre marque, qui peut démarrer dès aujourd'hui et courir jusqu'en 2030",
  "Contrat ponctuel de relations publiques, d'événementiels et d'hospitalités VIP",
  "Contrat de marketing digital, de contenu et d'influence",
];

const actionImages = [
  {
    src: "/imgs/sponsoring/yalla-vamos-2030.jpeg",
    alt: "Présentation officielle de la candidature Yalla Vamos 2030",
  },
  {
    src: "/imgs/sponsoring/fifa-club-world-cup-2022.jpeg",
    alt: "Noureddine Naybet lors du tirage au sort de la Coupe du Monde des Clubs, Maroc 2022",
  },
  {
    src: "/imgs/legende/nomination-royale.jpeg",
    alt: "Cérémonie officielle au Maroc en présence de Sa Majesté le Roi Mohammed VI",
  },
  {
    src: "/imgs/legende/naybet-selection-maroc.jpeg",
    alt: "Noureddine Naybet sous le maillot numéro 6 des Lions de l'Atlas",
  },
];

const logoImages = [
  {
    src: "/imgs/legende/naybet-portrait-plateau.jpeg",
    alt: "Noureddine Naybet, invité d'un plateau de télévision",
  },
  {
    src: "/imgs/sponsoring/presse-la-tour-royale.jpeg",
    alt: "Page de presse consacrée à Noureddine Naybet, « La tour royale »",
  },
  {
    src: "/imgs/palmares/scaloni-citation.jpeg",
    alt: "Lionel Scaloni en conférence de presse au sujet de Noureddine Naybet",
  },
  {
    src: "/imgs/palmares/deportivo-dreamcast.jpeg",
    alt: "Noureddine Naybet sous le maillot du Deportivo La Corogne",
  },
];

export default function Partenariats() {
  return (
    <>
      <Seo
        title="Partenariats — Noureddine Naybet | Site Officiel"
        description="Les formats de contrats de collaboration avec Noureddine Naybet : ambassadeur de marque à long terme jusqu'en 2030, relations publiques et hospitalités VIP, marketing digital de contenu et d'influence. Partenaire officiel : TotalEnergies."
        path="/partenariats"
        image={`${SITE_URL}/imgs/legende/naybet-tirage-fifa.jpeg`}
      />

      <div className={styles.grid}>
        <div className={styles.cellPortrait}>
          <img
            src="/imgs/legende/naybet-figo.jpeg"
            alt="Noureddine Naybet aux côtés de Luís Figo"
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
            src="/imgs/legende/naybet-tirage-fifa.jpeg"
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

        <div className={styles.cellLogos}>
          {logoImages.map((image) => (
            <div key={image.alt} className={styles.logoItem}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
