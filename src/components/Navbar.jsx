import { Link, NavLink } from "react-router-dom";
import useUIStore from "../store/uiStore.js";
import styles from "./Navbar.module.css";

const links = [
  { to: "/", label: "La Légende", end: true },
  { to: "/palmares", label: "Palmarès" },
  { to: "/sponsoring", label: "Sponsoring" },
  { to: "/partenariats", label: "Partenariats" },
  { to: "/boutique", label: "Boutique" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { menuOpen, toggleMenu, closeMenu } = useUIStore();

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo} onClick={closeMenu} aria-label="Noureddine Naybet — accueil">
        <span className={styles.logoMark}>NN</span>
        <span className={styles.logoName}>Noureddine Naybet</span>
      </Link>

      <div className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
        {links.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}
            onClick={closeMenu}
          >
            {label}
          </NavLink>
        ))}
      </div>

      <button
        className={`${styles.burger} ${menuOpen ? styles.open : ""}`}
        onClick={toggleMenu}
        aria-label="Menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
