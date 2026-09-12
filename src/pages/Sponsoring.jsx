import Seo from "../components/Seo.jsx";
import { SITE_URL } from "../config.js";
import styles from "./Sponsoring.module.css";

const leviers = [
  "Vos ventes — un levier commercial immédiat et surdimensionné",
  "Votre notoriété vis-à-vis de vos clients, au Maroc comme à l'international",
  "Votre crédibilité vis-à-vis de vos partenaires",
  "Vos levées de fonds et vos négociations stratégiques",
];

const secteurs = [
  "Banques",
  "Compagnies aériennes",
  "Assurances",
  "Hôtellerie",
  "Grands projets immobiliers",
  "Événementiels VIP",
  "Tous secteurs d'activité",
];

const actionImages = [
  {
    src: "/imgs/sponsoring/yalla-vamos-2030.jpeg",
    alt: "Présentation officielle de la candidature Yalla Vamos 2030",
  },
  {
    src: "/imgs/sponsoring/presse-la-tour-royale.jpeg",
    alt: "Page de presse consacrée à Noureddine Naybet, « La tour royale »",
  },
  {
    src: "/imgs/legende/naybet-tirage-fifa.jpeg",
    alt: "Noureddine Naybet lors d'un tirage au sort officiel de la FIFA",
  },
];

const logoImages = [
  {
    src: "/imgs/legende/naybet-selection-maroc.jpeg",
    alt: "Noureddine Naybet sous le maillot numéro 6 des Lions de l'Atlas",
  },
  {
    src: "/imgs/legende/naybet-portrait-plateau.jpeg",
    alt: "Noureddine Naybet, invité d'un plateau de télévision",
  },
  {
    src: "/imgs/legende/naybet-figo.jpeg",
    alt: "Noureddine Naybet aux côtés de Luís Figo",
  },
];

export default function Sponsoring() {
  return (
    <>
      <Seo
        title="Noureddine Naybet — Sponsoring | Site Officiel"
        description="Coupe du Monde 2030 : associez votre image et alignez vos valeurs à celles de Noureddine Naybet, ambassadeur officiel. Notoriété, crédibilité et retour sur investissement pour votre marque."
        path="/sponsoring"
        image={`${SITE_URL}/imgs/sponsoring/yalla-vamos-2030.jpeg`}
      />

      <div className={styles.grid}>
        <div className={styles.cellPortrait}>
          <img
            src="/imgs/sponsoring/fifa-club-world-cup-2022.jpeg"
            alt="Noureddine Naybet lors du tirage au sort de la Coupe du Monde des Clubs de la FIFA, Maroc 2022"
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
            leviers surdimensionnés et immédiats.
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
