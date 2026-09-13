import Button from "../components/Button.jsx";
import Seo from "../components/Seo.jsx";
import { SITE_URL } from "../config.js";
import styles from "./Sponsoring.module.css";

const leviers = [
  "Vos ventes — un retour sur investissement financier et économique immédiat",
  "Votre notoriété vis-à-vis de vos clients, au Maroc comme à l'international",
  "Votre crédibilité vis-à-vis de vos partenaires",
  "Vos levées de fonds et vos négociations stratégiques",
];

const secteurs = [
  "Votre marque",
  "Votre entreprise",
  "Banques",
  "Compagnies aériennes",
  "Assurances",
  "Hôtellerie",
  "Grands projets immobiliers",
  "Événementiels VIP",
  "Tous secteurs d'activité",
];

// visuels du dossier « sponsoring images », dans l'ordre numéroté du client
// (second.jpeg est arrivé vide : sa vignette sera ajoutée dès réception)
const actionImages = [
  {
    src: "/imgs/sponsoring/03-selection-maroc.jpeg",
    alt: "Noureddine Naybet, numéro 6, sous le maillot des Lions de l'Atlas",
  },
  {
    src: "/imgs/sponsoring/04-mondial-2030.jpeg",
    alt: "Affiche officielle de la Coupe du Monde FIFA 2030 : Maroc, Espagne, Portugal",
    // affiche : à montrer en entier, le recadrage couperait le texte
    contain: true,
  },
];

export default function Sponsoring() {
  return (
    <>
      <Seo
        title="Noureddine Naybet — Sponsoring | Site Officiel"
        description="Coupe du Monde 2030 : associez votre image et alignez vos valeurs à celles de Noureddine Naybet, ambassadeur officiel. Notoriété, crédibilité et retour sur investissement pour votre marque."
        path="/sponsoring"
        image={`${SITE_URL}/imgs/sponsoring/04-mondial-2030.jpeg`}
      />

      <div className={styles.grid}>
        <div className={styles.cellPortrait}>
          <img
            src="/imgs/sponsoring/01-portrait-plateau.jpeg"
            alt="Noureddine Naybet, invité d'un plateau de télévision"
            loading="eager"
          />
        </div>

        <div className={styles.cellText}>
          <span className={styles.eyebrow}>Sponsoring</span>
          <h1 className={styles.name}>Noureddine Naybet</h1>
          <p className={styles.bio}>
            La Coupe du Monde 2030 approche : les regards du monde entier et les consommateurs du
            Maroc sont tournés vers le Royaume et vers sa légende,{" "}
            <strong>ambassadeur officiel Noureddine Naybet</strong>.
          </p>
          <p className={styles.bio}>
            Directeurs marketing, dirigeants : associez votre image et alignez vos valeurs à celles
            d&apos;une légende à la puissance marketing narrative hors norme, au bénéfice de
            leviers surdimensionnés et immédiats — le « ROI » de votre marketing.
          </p>
          <ul className={styles.valuesList}>
            {leviers.map((levier) => (
              <li key={levier}>{levier}</li>
            ))}
          </ul>
          <div className={styles.sectors}>
            <span className={styles.sectorsLabel}>Tous secteurs</span>
            <p className={styles.sectorsList}>{secteurs.join(" · ")}</p>
          </div>
          <Button to="/partenariats" className={styles.cta}>
            Voir les formats de contrats de collaboration
          </Button>
        </div>

        <div className={styles.cellAction}>
          {actionImages.map((image) => (
            <div
              key={image.alt}
              className={`${styles.actionItem} ${image.contain ? styles.fitContain : ""}`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
