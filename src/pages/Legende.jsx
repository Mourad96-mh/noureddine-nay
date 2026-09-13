import Seo from "../components/Seo.jsx";
import { OG_IMAGE, SITE_URL } from "../config.js";
import styles from "./Legende.module.css";

const logos = [
  {
    src: "/imgs/legende/04-mondial-2030.jpeg",
    alt: "Affiche officielle de la Coupe du Monde FIFA 2030 : Maroc, Espagne, Portugal",
  },
  {
    src: "/imgs/legende/05-grand-stade-hassan-ii.jpeg",
    alt: "Projection du Grand Stade Hassan II de Casablanca, écrin du Mondial 2030",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Noureddine Naybet",
  alternateName: "Nourredine Naybet",
  nationality: "Marocaine",
  jobTitle: "Ambassadeur officiel pour l'organisation de la Coupe du Monde 2030",
  url: SITE_URL,
  image: OG_IMAGE,
  description:
    "Noureddine Naybet, icône de la nation et légende du football mondial. Joueur le plus sélectionné de l'histoire du football marocain, champion d'Espagne avec le Deportivo La Corogne, ambassadeur officiel pour l'organisation de la Coupe du Monde 2030.",
  affiliation: {
    "@type": "SportsOrganization",
    name: "Fédération Royale Marocaine de Football",
  },
};

export default function Legende() {
  return (
    <>
      <Seo
        title="Noureddine Naybet — Site Officiel"
        description="Site officiel de Noureddine Naybet : icône de la nation, légende du football mondial et ambassadeur officiel pour l'organisation de la Coupe du Monde 2030."
        path="/"
        jsonLd={jsonLd}
      />

      <div className={styles.grid}>
        <div className={styles.cellPortrait}>
          <img
            src="/imgs/legende/01-club-world-cup-2022.jpeg"
            alt="Noureddine Naybet procède au tirage au sort de la Coupe du Monde des Clubs FIFA, Maroc 2022"
            loading="eager"
          />
        </div>

        <div className={styles.cellText}>
          <span className={styles.eyebrow}>Site Officiel</span>
          <h1 className={styles.name}>Noureddine Naybet</h1>
          <p className={styles.bio}>
            Aujourd&apos;hui, la haute autorité de la diplomatie du Royaume chérifien du Maroc a
            choisi et nommé Noureddine Naybet <em>icône de la nation</em> et légende du football
            mondial. Ambassadeur officiel pour l&apos;organisation de la Coupe du Monde 2030.
          </p>
          <ul className={styles.legendList}>
            <li>
              Un symbole qui reflète une puissance marketing internationale et un message
              géopolitique narratif hors norme.
            </li>
            <li>
              Un alignement de valeurs de la légende Naybet : excellence, rigueur, discipline,
              expertise au sein de la FRMF, sans faille.
            </li>
            <li>
              Des valeurs qu&apos;il continue d&apos;incarner après carrière, avec une personnalité
              et une attitude exceptionnelles.
            </li>
            <li>
              Identiques à un Royaume fort, puissant, en progrès permanent, ouvert au monde sans
              complexe.
            </li>
            <li>
              Avec une fondation solide, stable, respectée et conquérante mondialement.
            </li>
          </ul>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>115</span>
              <span className={styles.statLabel}>Sélections — record national</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>2030</span>
              <span className={styles.statLabel}>Ambassadeur officiel du Mondial</span>
            </div>
          </div>
        </div>

        <div className={styles.cellGold}>
          <img
            src="/imgs/legende/02-selection-maroc.jpeg"
            alt="Noureddine Naybet, numéro 6, sous le maillot des Lions de l'Atlas"
            loading="eager"
          />
          <div className={styles.goldOverlay}>
            <span className={styles.goldQuote}>
              « Des valeurs identiques à celles d&apos;un Royaume fort, puissant et conquérant
              mondialement. »
            </span>
          </div>
        </div>

        <div className={styles.cellAction}>
          <img
            src="/imgs/legende/03-nomination-royale.jpeg"
            alt="Cérémonie officielle au Maroc en présence de Sa Majesté le Roi Mohammed VI"
            loading="lazy"
          />
        </div>

        <div className={styles.cellLogos}>
          {logos.map((logo) => (
            <div key={logo.alt} className={styles.logoItem}>
              <img src={logo.src} alt={logo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
