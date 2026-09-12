import Seo from "../components/Seo.jsx";
import Button from "../components/Button.jsx";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page introuvable | Noureddine Naybet"
        description="La page demandée n'existe pas ou a été déplacée."
        path="/404"
        noindex
      />

      <div className={styles.page}>
        <span className={styles.code}>404</span>
        <h1 className={styles.title}>Page introuvable</h1>
        <p className={styles.text}>La page demandée n&apos;existe pas ou a été déplacée.</p>
        <Button to="/">Retour à l&apos;accueil</Button>
      </div>
    </>
  );
}
