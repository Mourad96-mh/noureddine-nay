import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import styles from "./Layout.module.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  // corps en bloc : une flèche à expression renverrait la valeur de scrollTo,
  // que React prendrait pour une fonction de nettoyage
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Layout() {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <div className={styles.shell}>
        <Navbar />
        <main className={styles.main}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}
