/**
 * Prépare les photos fournies par le client (dossiers « la legende »,
 * « palmares images », « partenariats images », « sponsoring images ») vers
 * public/imgs/. Le script est idempotent : on peut le relancer après avoir
 * ajouté ou remplacé une source.
 *
 *   npm run images
 *
 * Les recadrages (crop) sont mesurés à la main sur chaque source :
 *   - la capture d'écran de téléphone perd ses bandes noires et l'UI Android ;
 *   - les photos d'agence perdent leur bandeau de filigrane en pied d'image.
 */
import { access, mkdir, stat } from "node:fs/promises";
import { dirname } from "node:path";
import sharp from "sharp";

const SRC = {
  // dossier « la legende » : les 5 visuels numérotés par le client, dans
  // l'ordre où ils doivent apparaître sur la page d'accueil
  legende1: "la legende/first.jpeg",
  legende2: "la legende/second.jpeg",
  legende3: "la legende/third.jpeg",
  legende4: "la legende/fourth.jpeg",
  legende5: "la legende/fifth.jpeg",
  // dossier « palmares images » : les 9 visuels numérotés par le client
  palmares1: "palmares images/first.jpeg",
  palmares2: "palmares images/second.jpeg",
  palmares3: "palmares images/third.jpeg",
  palmares4: "palmares images/fourth.jpeg",
  palmares5: "palmares images/WhatsApp Image 2026-09-13 at 19.10.05.jpeg",
  palmares6: "palmares images/WhatsApp Image 2026-09-13 at 19.10.05 (1).jpeg",
  palmares7: "palmares images/WhatsApp Image 2026-09-13 at 19.10.06.jpeg",
  palmares8: "palmares images/WhatsApp Image 2026-09-13 at 19.10.06 (1).jpeg",
  palmares9: "palmares images/WhatsApp Image 2026-09-13 at 19.10.07.jpeg",
  // dossier « partenariats images » : les visuels numérotés par le client
  partenariats1: "partenariats images/first.jpeg",
  partenariats2: "partenariats images/second.jpeg",
  partenariats3: "partenariats images/third.jpeg",
  // dossier « sponsoring images » : les visuels numérotés par le client
  sponsoring1: "sponsoring images/first.jpeg",
  sponsoring2: "sponsoring images/second.jpeg",
  sponsoring3: "sponsoring images/third.jpeg",
  sponsoring4: "sponsoring images/fourth.jpeg",
};

// crop : { left, top, width, height } appliqué avant l'export
const JOBS = [
  // page « La Légende » : les 5 visuels dans l'ordre demandé
  { src: "legende1", out: "public/imgs/legende/01-club-world-cup-2022.jpeg" },
  { src: "legende2", out: "public/imgs/legende/02-selection-maroc.jpeg" },
  {
    src: "legende3",
    out: "public/imgs/legende/03-nomination-royale.jpeg",
    crop: { left: 0, top: 484, width: 738, height: 632 },
  },
  { src: "legende4", out: "public/imgs/legende/04-mondial-2030.jpeg" },
  { src: "legende5", out: "public/imgs/legende/05-grand-stade-hassan-ii.jpeg" },

  // page « Palmarès » : les 9 visuels dans l'ordre demandé ; les deux photos
  // d'agence perdent leur bandeau de filigrane en pied d'image
  {
    src: "palmares1",
    out: "public/imgs/palmares/01-deportivo-action.jpeg",
    crop: { left: 0, top: 0, width: 797, height: 1197 },
  },
  { src: "palmares2", out: "public/imgs/palmares/02-selection-maroc.jpeg" },
  {
    src: "palmares3",
    out: "public/imgs/palmares/03-tottenham-action.jpeg",
    crop: { left: 0, top: 0, width: 797, height: 1197 },
  },
  { src: "palmares4", out: "public/imgs/palmares/04-deportivo-celebration.jpeg" },
  { src: "palmares5", out: "public/imgs/palmares/05-naybet-zidane.jpeg" },
  { src: "palmares6", out: "public/imgs/palmares/06-deportivo-dreamcast.jpeg" },
  { src: "palmares7", out: "public/imgs/palmares/07-deportivo-titre.jpeg" },
  { src: "palmares8", out: "public/imgs/palmares/08-scaloni-citation.jpeg" },
  { src: "palmares9", out: "public/imgs/palmares/09-scaloni-onze.jpeg" },

  // page « Partenariats » : les visuels dans l'ordre demandé
  { src: "partenariats1", out: "public/imgs/partenariats/01-portrait-plateau.jpeg" },
  { src: "partenariats2", out: "public/imgs/partenariats/02-tirage-fifa.jpeg" },
  { src: "partenariats3", out: "public/imgs/partenariats/03-mondial-2030.jpeg" },

  // page « Sponsoring » : les visuels dans l'ordre demandé
  { src: "sponsoring1", out: "public/imgs/sponsoring/01-portrait-plateau.jpeg" },
  { src: "sponsoring2", out: "public/imgs/sponsoring/02.jpeg" },
  { src: "sponsoring3", out: "public/imgs/sponsoring/03-selection-maroc.jpeg" },
  { src: "sponsoring4", out: "public/imgs/sponsoring/04-mondial-2030.jpeg" },
];

// une source encore en cours de copie depuis OneDrive fait 0 octet : on la
// traite comme absente
async function isReadable(path) {
  try {
    await access(path);
    return (await stat(path)).size > 0;
  } catch {
    return false;
  }
}

async function run() {
  for (const job of JOBS) {
    const src = SRC[job.src];
    // le client renomme et remplace ses dossiers photo au fil de l'eau : on
    // saute la source absente au lieu d'interrompre toute la préparation
    if (!(await isReadable(src))) {
      console.warn(`source absente ou vide, ignorée : ${src}`);
      continue;
    }
    await mkdir(dirname(job.out), { recursive: true });
    let img = sharp(src).rotate();
    if (job.crop) img = img.extract(job.crop);
    await img.jpeg({ quality: 84, progressive: true, mozjpeg: true }).toFile(job.out);
    const { width, height } = await sharp(job.out).metadata();
    console.log(`${job.out}  ${width}x${height}`);
  }

  // image de partage (Open Graph / Twitter) : 1200x630 depuis le portrait
  if (!(await isReadable(SRC.partenariats2))) return;
  await sharp(SRC.partenariats2)
    .resize(1200, 630, { fit: "cover", position: "top" })
    .jpeg({ quality: 86, progressive: true, mozjpeg: true })
    .toFile("public/imgs/og-noureddine-naybet.jpeg");
  console.log("public/imgs/og-noureddine-naybet.jpeg  1200x630");
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
