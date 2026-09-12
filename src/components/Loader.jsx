import styles from "./Loader.module.css";

export default function Loader({ fullPage = false }) {
  return (
    <div className={`${styles.loader} ${fullPage ? styles.fullPage : ""}`}>
      <div className={styles.ring} role="status" aria-label="Chargement…" />
    </div>
  );
}
