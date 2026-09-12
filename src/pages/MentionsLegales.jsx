import Seo from "../components/Seo.jsx";
import styles from "./MentionsLegales.module.css";

export default function MentionsLegales() {
  return (
    <>
      <Seo
        title="Mentions légales | Noureddine Naybet — Site Officiel"
        description="Mentions légales du site officiel de Noureddine Naybet."
        path="/mentions-legales"
        noindex
      />

      <div className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>Mentions légales</h1>

          <section className={styles.section}>
            <h2 className={styles.heading}>1. Éditeur du site</h2>
            <p>
              Le site <strong>noureddinenaybet.com</strong> est édité par :
            </p>
            <ul className={styles.list}>
              <li>Nom : Noureddine Naybet</li>
              <li>Gestionnaire du site : Abdessamad Chafiki</li>
              <li>Qualité : Chargé d&apos;affaires &amp; gestion d&apos;image</li>
              <li>Société : NATIS MARKETING</li>
              <li>Adresse : 3, BD des Anglais — 44100 Nantes, France</li>
              <li>SIRET : 41053798900031</li>
              <li>
                Téléphone :{" "}
                <a href="tel:+33777449885" className={styles.link}>
                  +33 7 77 44 98 85
                </a>
              </li>
              <li>
                Email :{" "}
                <a href="mailto:Chafikiii@yahoo.fr" className={styles.link}>
                  Chafikiii@yahoo.fr
                </a>
              </li>
            </ul>
          </section>

          {/* À COMPLÉTER avant la mise en ligne : nom et adresse de l'hébergeur retenu. */}
          <section className={styles.section}>
            <h2 className={styles.heading}>2. Hébergement</h2>
            <p>
              Les coordonnées de l&apos;hébergeur seront précisées à la mise en ligne du site.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>3. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, images, vidéos, logos,
              graphismes) sont protégés par le droit d&apos;auteur et appartiennent à Noureddine
              Naybet ou à leurs auteurs respectifs. Toute reproduction, distribution ou utilisation
              sans autorisation préalable écrite est strictement interdite.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>4. Données personnelles</h2>
            <p>
              Les informations collectées via le formulaire de contact sont utilisées uniquement
              pour répondre aux demandes des utilisateurs. Conformément au Règlement général sur la
              protection des données (RGPD), vous disposez d&apos;un droit d&apos;accès, de
              rectification et de suppression de vos données. Pour exercer ces droits, écrivez-nous
              à l&apos;adresse{" "}
              <a href="mailto:Chafikiii@yahoo.fr" className={styles.link}>
                Chafikiii@yahoo.fr
              </a>
              .
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>5. Cookies</h2>
            <p>
              Ce site peut utiliser des cookies à des fins de mesure d&apos;audience. Vous pouvez
              paramétrer votre navigateur pour refuser les cookies ou être alerté lorsqu&apos;un
              cookie est envoyé.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>6. Limitation de responsabilité</h2>
            <p>
              L&apos;éditeur s&apos;efforce de maintenir les informations publiées sur ce site
              aussi précises et à jour que possible, mais ne saurait être tenu responsable des
              erreurs, omissions ou résultats obtenus par l&apos;utilisation de ces informations.
              Des liens hypertextes peuvent renvoyer vers des sites tiers sur lesquels
              l&apos;éditeur n&apos;exerce aucun contrôle.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>7. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de litige,
              les tribunaux français seront seuls compétents.
            </p>
          </section>

          <p className={styles.updated}>Dernière mise à jour : septembre 2026</p>
        </div>
      </div>
    </>
  );
}
