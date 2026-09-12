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
import { mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import sharp from "sharp";

const SRC = {
  legende1: "la legende/WhatsApp Image 2026-09-08 at 19.01.45.jpeg",
  legende2: "la legende/WhatsApp Image 2026-09-08 at 19.01.50.jpeg",
  plateau: "palmares images/WhatsApp Image 2026-09-07 at 22.13.31.jpeg",
  deportivo: "palmares images/WhatsApp Image 2026-09-07 at 22.15.48.jpeg",
  tottenham: "palmares images/WhatsApp Image 2026-09-07 at 22.15.49 (1).jpeg",
  zidane: "palmares images/WhatsApp Image 2026-09-07 at 22.15.49 (2).jpeg",
  dreamcast: "palmares images/WhatsApp Image 2026-09-07 at 22.15.49 (3).jpeg",
  equipeCL: "palmares images/WhatsApp Image 2026-09-07 at 22.15.49 (4).jpeg",
  trophee: "palmares images/WhatsApp Image 2026-09-07 at 22.15.49 (5).jpeg",
  celebration: "palmares images/WhatsApp Image 2026-09-07 at 22.15.49.jpeg",
  scaloni: "palmares images/WhatsApp Image 2026-09-07 at 22.15.50.jpeg",
  scaloniOnze: "palmares images/WhatsApp Image 2026-09-07 at 22.15.50 (1).jpeg",
  sporting: "palmares images/WhatsApp Image 2026-09-07 at 22.15.50 (2).jpeg",
  sportingTop30: "palmares images/WhatsApp Image 2026-09-11 at 11.15.11.jpeg",
  tirage: "partenariats images/WhatsApp Image 2026-09-07 at 22.22.56.jpeg",
  maroc: "partenariats images/WhatsApp Image 2026-09-07 at 22.24.14.jpeg",
  clubWC: "sponsoring images/WhatsApp Image 2026-09-07 at 22.17.52.jpeg",
  presse: "sponsoring images/WhatsApp Image 2026-09-07 at 22.20.37.jpeg",
  yalla: "sponsoring images/WhatsApp Image 2026-09-07 at 22.21.35.jpeg",
};

// crop : { left, top, width, height } appliqué avant l'export
const JOBS = [
  { src: "tirage", out: "public/imgs/legende/naybet-tirage-fifa.jpeg" },
  { src: "legende2", out: "public/imgs/legende/naybet-figo.jpeg" },
  {
    src: "legende1",
    out: "public/imgs/legende/nomination-royale.jpeg",
    crop: { left: 0, top: 484, width: 738, height: 632 },
  },
  { src: "plateau", out: "public/imgs/legende/naybet-portrait-plateau.jpeg" },
  { src: "maroc", out: "public/imgs/legende/naybet-selection-maroc.jpeg" },

  {
    src: "deportivo",
    out: "public/imgs/palmares/deportivo-action.jpeg",
    crop: { left: 0, top: 0, width: 797, height: 1197 },
  },
  {
    src: "tottenham",
    out: "public/imgs/palmares/tottenham-action.jpeg",
    crop: { left: 0, top: 0, width: 797, height: 1197 },
  },
  {
    src: "equipeCL",
    out: "public/imgs/palmares/deportivo-champions-league.jpeg",
    crop: { left: 0, top: 0, width: 1280, height: 854 },
  },
  { src: "zidane", out: "public/imgs/palmares/naybet-zidane.jpeg" },
  { src: "dreamcast", out: "public/imgs/palmares/deportivo-dreamcast.jpeg" },
  { src: "trophee", out: "public/imgs/palmares/deportivo-trophee.jpeg" },
  { src: "celebration", out: "public/imgs/palmares/deportivo-titre.jpeg" },
  { src: "scaloni", out: "public/imgs/palmares/scaloni-citation.jpeg" },
  { src: "scaloniOnze", out: "public/imgs/palmares/scaloni-onze.jpeg" },
  { src: "sporting", out: "public/imgs/palmares/sporting-lisbonne.jpeg" },
  { src: "sportingTop30", out: "public/imgs/palmares/sporting-legendes.jpeg" },

  { src: "clubWC", out: "public/imgs/sponsoring/fifa-club-world-cup-2022.jpeg" },
  { src: "yalla", out: "public/imgs/sponsoring/yalla-vamos-2030.jpeg" },
  { src: "presse", out: "public/imgs/sponsoring/presse-la-tour-royale.jpeg" },
];

async function run() {
  for (const job of JOBS) {
    const src = SRC[job.src];
    await mkdir(dirname(job.out), { recursive: true });
    let img = sharp(src).rotate();
    if (job.crop) img = img.extract(job.crop);
    await img.jpeg({ quality: 84, progressive: true, mozjpeg: true }).toFile(job.out);
    const { width, height } = await sharp(job.out).metadata();
    console.log(`${job.out}  ${width}x${height}`);
  }

  // image de partage (Open Graph / Twitter) : 1200x630 depuis le portrait
  await sharp(SRC.tirage)
    .resize(1200, 630, { fit: "cover", position: "top" })
    .jpeg({ quality: 86, progressive: true, mozjpeg: true })
    .toFile("public/imgs/og-noureddine-naybet.jpeg");
  console.log("public/imgs/og-noureddine-naybet.jpeg  1200x630");
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
