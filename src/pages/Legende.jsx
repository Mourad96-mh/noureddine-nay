import Seo from "../components/Seo.jsx";
import { OG_IMAGE, SITE_URL } from "../config.js";
import styles from "./Legende.module.css";

const logos = [
  {
    src: "/imgs/legende/naybet-portrait-plateau.jpeg",
    alt: "Noureddine Naybet, invité d'un plateau de télévision",
  },
  {
    src: "/imgs/legende/naybet-selection-maroc.jpeg",
    alt: "Noureddine Naybet sous le maillot numéro 6 des Lions de l'Atlas",
  },
  {
    src: "/imgs/sponsoring/yalla-vamos-2030.jpeg",
    alt: "Présentation officielle de la candidature Yalla Vamos 2030",
  },
  {
    src: "/imgs/sponsoring/fifa-club-world-cup-2022.jpeg",
    alt: "Noureddine Naybet lors du tirage au sort de la Coupe du Monde des Clubs, Maroc 2022",
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
            src="/imgs/legende/naybet-tirage-fifa.jpeg"
            alt="Noureddine Naybet lors d'un tirage au sort officiel de la FIFA"
            loading="eager"
          />
        </div>

        <div className={styles.cellText}>
          <span className={styles.eyebrow}>Site Officiel</span>
          <h1 className={styles.name}>Noureddine Naybet</h1>
          <p className={styles.bio}>
            Aujourd&apos;hui, la haute autorité de la diplomatie du Royaume chérifien du Maroc a
            choisi et nommé Noureddine Naybet <em>icône de la nation</em> et légende du football
            mondial, ambassadeur officiel pour l&apos;organisation de la Coupe du Monde 2030.
          </p>
          <ul className={styles.legendList}>
            <li>
              Un symbole qui reflète une puissance marketing internationale et un message
              géopolitique narratif hors norme.
            </li>
            <li>
              Un alignement de valeurs d&apos;excellence, de rigueur, de discipline et
              d&apos;expertise, porté sans faille au sein de la FRMF.
            </li>
            <li>
              Une personnalité et une attitude exceptionnelles, qu&apos;il continue d&apos;incarner
              après sa carrière de joueur.
            </li>
            <li>
              L&apos;image d&apos;un Royaume fort, puissant, en progrès permanent et ouvert au monde
              sans complexe.
            </li>
            <li>Une fondation solide, stable, respectée et conquérante mondialement.</li>
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
            src="/imgs/legende/naybet-figo.jpeg"
            alt="Noureddine Naybet aux côtés de Luís Figo"
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
            src="/imgs/legende/nomination-royale.jpeg"
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
