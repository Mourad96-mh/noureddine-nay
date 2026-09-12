import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Loader from "./components/Loader.jsx";

const Legende = lazy(() => import("./pages/Legende.jsx"));
const Palmares = lazy(() => import("./pages/Palmares.jsx"));
const Sponsoring = lazy(() => import("./pages/Sponsoring.jsx"));
const Partenariats = lazy(() => import("./pages/Partenariats.jsx"));
const Boutique = lazy(() => import("./pages/Boutique.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

function page(Component) {
  return (
    <Suspense fallback={<Loader fullPage />}>
      <Component />
    </Suspense>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: page(Legende) },
      { path: "palmares", element: page(Palmares) },
      { path: "sponsoring", element: page(Sponsoring) },
      { path: "partenariats", element: page(Partenariats) },
      { path: "boutique", element: page(Boutique) },
      { path: "contact", element: page(Contact) },
      { path: "mentions-legales", element: page(MentionsLegales) },
      { path: "*", element: page(NotFound) },
    ],
  },
]);

export default router;
