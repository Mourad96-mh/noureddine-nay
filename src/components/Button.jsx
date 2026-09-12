import { Link } from "react-router-dom";
import styles from "./Button.module.css";

export default function Button({ children, variant = "primary", to, className = "", ...props }) {
  const classes = `${styles.btn} ${styles[variant]} ${className}`;
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
