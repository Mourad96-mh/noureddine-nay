import Seo from "../components/Seo.jsx";
import { SITE_URL } from "../config.js";
import styles from "./Palmares.module.css";

const clubs = [
  {
    name: "Équipe nationale du Maroc",
    detail: "Patron des Lions de l'Atlas — 115 sélections, record national",
  },
  {
    name: "Deportivo La Corogne",
    detail: "Légende inoubliable — Champion d'Espagne",
  },
  { name: "Tottenham Hotspur", detail: "Les Spurs, en Premier League" },
  {
    name: "Sporting de Lisbonne",
    detail: "Le Sporting de Figo et de Cristiano Ronaldo à leurs débuts",
  },
  { name: "FC Nantes", detail: "L'épopée 1995, ses débuts en Europe" },
  { name: "Wydad de Casablanca", detail: "Le grand WAC" },
];

// surnoms donnés par les fans et les spécialistes, pendant et après carrière
const nicknames = [
  "Le Roc",
  "Le bloc infranchissable",
  "La fondation solide",
  "Aura et autorité naturelle",
  "La rigueur",
  "Le ministre de la Défense",
];

const actionImages = [
  {
    src: "/imgs/palmares/03-tottenham-action.jpeg",
    alt: "Noureddine Naybet sous le maillot de Tottenham Hotspur en Premier League",
  },
  {
    src: "/imgs/palmares/04-deportivo-celebration.jpeg",
    alt: "Le Deportivo La Corogne célèbre son titre sur la pelouse de Riazor",
  },
  {
    src: "/imgs/palmares/05-naybet-zidane.jpeg",
    alt: "Noureddine Naybet face à Zinédine Zidane lors d'un Real Madrid — Deportivo La Corogne",
  },
  {
    src: "/imgs/palmares/06-deportivo-dreamcast.jpeg",
    alt: "Noureddine Naybet contrôle le ballon sous le maillot du Deportivo La Corogne",
  },
];

const logoImages = [
  {
    src: "/imgs/palmares/07-deportivo-titre.jpeg",
    alt: "Le Deportivo La Corogne champion, trophée en main",
  },
  {
    src: "/imgs/palmares/08-scaloni-citation.jpeg",
    alt: "Lionel Scaloni en conférence de presse au sujet de Noureddine Naybet",
  },
  {
    src: "/imgs/palmares/09-scaloni-onze.jpeg",
    alt: "Le onze de légende de Lionel Scaloni, avec Noureddine Naybet en défense centrale",
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
  memberOf: clubs.map((club) => ({ "@type": "SportsTeam", name: club.name })),
};

export default function Palmares() {
  return (
    <>
      <Seo
        title="Noureddine Naybet — Palmarès | Site Officiel"
        description="Le palmarès de Noureddine Naybet : patron de l'équipe nationale du Maroc et joueur le plus sélectionné de son histoire, champion d'Espagne avec le Deportivo La Corogne, Tottenham, Sporting Portugal, FC Nantes et Wydad de Casablanca."
        path="/palmares"
        image={`${SITE_URL}/imgs/palmares/08-scaloni-citation.jpeg`}
        jsonLd={jsonLd}
      />

      <div className={styles.grid}>
        <div className={styles.cellPortrait}>
          <img
            src="/imgs/palmares/01-deportivo-action.jpeg"
            alt="Noureddine Naybet frappe le ballon sous le maillot du Deportivo La Corogne"
            loading="eager"
          />
        </div>

        <div className={styles.cellPortrait2}>
          <img
            src="/imgs/palmares/02-selection-maroc.jpeg"
            alt="Noureddine Naybet, numéro 6, patron des Lions de l'Atlas"
            loading="eager"
          />
        </div>

        <div className={styles.cellText}>
          <span className={styles.eyebrow}>Palmarès</span>
          <h1 className={styles.name}>Noureddine Naybet</h1>
          <p className={styles.intro}>
            Noureddine Naybet a réalisé une carrière internationale fulgurante. Décrit comme un
            monstre talentueux et respecté des championnats européens, et en patron de
            l&apos;équipe nationale du Maroc, le plus sélectionné de l&apos;histoire du football
            marocain.
          </p>
          <blockquote className={styles.quote}>
            « Pour moi Naybet, c&apos;est le meilleur défenseur du monde que j&apos;ai vu. »
            <span className={styles.quoteAuthor}>
              Lionel Scaloni, sélectionneur de l&apos;Argentine de Messi, championne et meilleure
              équipe du monde — en conférence de presse pendant le Mondial 2026
            </span>
          </blockquote>
          <div className={styles.nicknames}>
            <span className={styles.nicknamesLabel}>
              Les superlatifs des fans et des spécialistes du football mondial
            </span>
            <div className={styles.nicknamesRow}>
              {nicknames.map((nickname) => (
                <span key={nickname} className={styles.nickname}>
                  {nickname}
                </span>
              ))}
            </div>
          </div>
          <ul className={styles.clubsList}>
            {clubs.map((club) => (
              <li key={club.name} className={styles.clubsItem}>
                <span className={styles.clubDot} />
                <span className={styles.clubText}>
                  <span className={styles.clubName}>{club.name}</span>
                  <span className={styles.clubDetail}>{club.detail}</span>
                </span>
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
