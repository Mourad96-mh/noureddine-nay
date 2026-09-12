import Seo from "../components/Seo.jsx";
import { SITE_URL } from "../config.js";
import styles from "./Palmares.module.css";

const clubs = [
  "Équipe nationale du Maroc",
  "Deportivo La Corogne",
  "Tottenham Hotspur",
  "Sporting Portugal",
  "FC Nantes",
  "Wydad de Casablanca",
];

const actionImages = [
  {
    src: "/imgs/palmares/naybet-zidane.jpeg",
    alt: "Noureddine Naybet face à Zinédine Zidane lors d'un Deportivo La Corogne — Real Madrid",
  },
  {
    src: "/imgs/palmares/deportivo-champions-league.jpeg",
    alt: "Photo d'équipe du Deportivo La Corogne en Ligue des Champions",
  },
  {
    src: "/imgs/palmares/deportivo-trophee.jpeg",
    alt: "Le Deportivo La Corogne célèbre un titre avec Noureddine Naybet",
  },
  {
    src: "/imgs/palmares/deportivo-titre.jpeg",
    alt: "Célébration d'un titre avec le Deportivo La Corogne",
  },
];

const logoImages = [
  {
    src: "/imgs/palmares/scaloni-citation.jpeg",
    alt: "Lionel Scaloni en conférence de presse au sujet de Noureddine Naybet",
  },
  {
    src: "/imgs/palmares/scaloni-onze.jpeg",
    alt: "Le onze de légende de Lionel Scaloni, avec Noureddine Naybet en défense centrale",
  },
  {
    src: "/imgs/palmares/sporting-legendes.jpeg",
    alt: "Noureddine Naybet parmi les trente légendes du Sporting de Lisbonne",
  },
  {
    src: "/imgs/palmares/sporting-lisbonne.jpeg",
    alt: "Noureddine Naybet au Sporting Portugal aux côtés d'un jeune coéquipier",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Noureddine Naybet",
  url: `${SITE_URL}/palmares`,
  jobTitle: "Ancien footballeur international marocain",
  description:
    "Palmarès de Noureddine Naybet : joueur le plus sélectionné de l'histoire du football marocain, champion d'Espagne avec le Deportivo La Corogne, passé par Tottenham, le Sporting Portugal, le FC Nantes et le Wydad de Casablanca.",
  memberOf: clubs.map((club) => ({ "@type": "SportsTeam", name: club })),
};

export default function Palmares() {
  return (
    <>
      <Seo
        title="Noureddine Naybet — Palmarès | Site Officiel"
        description="Le palmarès de Noureddine Naybet : patron de l'équipe nationale du Maroc et joueur le plus sélectionné de son histoire, champion d'Espagne avec le Deportivo La Corogne, Tottenham, Sporting Portugal, FC Nantes et Wydad de Casablanca."
        path="/palmares"
        image={`${SITE_URL}/imgs/palmares/scaloni-citation.jpeg`}
        jsonLd={jsonLd}
      />

      <div className={styles.grid}>
        <div className={styles.cellPortrait}>
          <img
            src="/imgs/palmares/deportivo-dreamcast.jpeg"
            alt="Noureddine Naybet contrôle le ballon sous le maillot du Deportivo La Corogne"
            loading="eager"
          />
        </div>

        <div className={styles.cellPortrait2}>
          <img
            src="/imgs/palmares/tottenham-action.jpeg"
            alt="Noureddine Naybet sous le maillot de Tottenham Hotspur en Premier League"
            loading="eager"
          />
        </div>

        <div className={styles.cellText}>
          <span className={styles.eyebrow}>Palmarès</span>
          <h1 className={styles.name}>Noureddine Naybet</h1>
          <p className={styles.intro}>
            Une carrière internationale fulgurante. Décrit comme un monstre talentueux et respecté
            des championnats européens, patron de l&apos;équipe nationale du Maroc et joueur le plus
            sélectionné de l&apos;histoire du football marocain — 115 sélections.
          </p>
          <blockquote className={styles.quote}>
            « Le meilleur défenseur avec qui j&apos;ai joué ? Noureddine Naybet. »
            <span className={styles.quoteAuthor}>
              Lionel Scaloni, sélectionneur champion du monde avec l&apos;Argentine
            </span>
          </blockquote>
          <ul className={styles.clubsList}>
            {clubs.map((club) => (
              <li key={club} className={styles.clubsItem}>
                <span className={styles.clubDot} />
                {club}
              </li>
            ))}
          </ul>
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
