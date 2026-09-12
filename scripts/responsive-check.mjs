/**
 * Vérifie la responsivité de toutes les pages à toutes les largeurs utiles.
 * Pilote Edge en headless via le protocole DevTools (WebSocket natif de Node).
 *
 *   node responsive-check.mjs [baseUrl]
 */
import { spawn } from "node:child_process";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const BASE = process.argv[2] || "http://localhost:5173";
const EDGE = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const PORT = 9333;

const PAGES = [
  ["legende", "/"],
  ["palmares", "/palmares"],
  ["sponsoring", "/sponsoring"],
  ["partenariats", "/partenariats"],
  ["boutique", "/boutique"],
  ["contact", "/contact"],
  ["mentions", "/mentions-legales"],
];

const VIEWPORTS = [
  [320, 720, "petit mobile"],
  [360, 800, "mobile Android"],
  [390, 844, "iPhone"],
  [430, 932, "grand mobile"],
  [480, 900, "bascule 480"],
  [540, 900, "phablette"],
  [600, 900, "bascule 600"],
  [768, 1024, "tablette portrait"],
  [834, 1112, "iPad Air"],
  [1024, 768, "tablette paysage"],
  [1080, 800, "bascule 1080"],
  [1280, 800, "laptop"],
  [1440, 900, "desktop"],
  [1920, 1080, "grand desktop"],
  [812, 375, "mobile paysage"],
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function targetUrl() {
  for (let i = 0; i < 40; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/list`);
      const list = await res.json();
      const page = list.find((t) => t.type === "page");
      if (page?.webSocketDebuggerUrl) return page.webSocketDebuggerUrl;
    } catch {
      /* le navigateur n'écoute pas encore */
    }
    await sleep(250);
  }
  throw new Error("DevTools introuvable");
}

class Client {
  constructor(ws) {
    this.ws = ws;
    this.id = 0;
    this.pending = new Map();
    ws.addEventListener("message", (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve, reject } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        if (msg.error) reject(new Error(JSON.stringify(msg.error)));
        else resolve(msg.result);
      }
    });
  }

  send(method, params = {}) {
    const id = ++this.id;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  async eval(expression) {
    const res = await this.send("Runtime.evaluate", {
      expression,
      returnByValue: true,
      awaitPromise: true,
    });
    return res.result?.value;
  }
}

const PROBE = `(() => {
  const vw = window.innerWidth;
  const docW = document.documentElement.scrollWidth;
  const over = [];
  for (const el of document.querySelectorAll("body *")) {
    const r = el.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) continue;
    if (r.right > vw + 1 || r.left < -1) {
      const cs = getComputedStyle(el);
      if (cs.position === "fixed") continue;
      over.push(
        (el.tagName.toLowerCase() + (el.className && typeof el.className === "string"
          ? "." + el.className.trim().split(/\\s+/)[0] : "")) +
          " [" + Math.round(r.left) + ".." + Math.round(r.right) + "]"
      );
    }
  }
  // texte coupé : élément dont le contenu dépasse sa boîte alors qu'il masque
  const clipped = [];
  for (const el of document.querySelectorAll("body *")) {
    const cs = getComputedStyle(el);
    if (cs.overflow !== "hidden" && cs.overflowY !== "hidden") continue;
    const hasText = el.innerText && el.innerText.trim().length > 0;
    if (!hasText) continue;
    if (el.scrollHeight > el.clientHeight + 2 && el.clientHeight > 0) {
      clipped.push(
        (el.tagName.toLowerCase() + (typeof el.className === "string" && el.className
          ? "." + el.className.trim().split(/\\s+/)[0] : "")) +
          " " + el.clientHeight + "<" + el.scrollHeight
      );
    }
  }
  const tap = [];
  const touch = window.innerWidth <= 1080;
  for (const el of document.querySelectorAll(
    (touch ? "nav a, nav button, " : "") + "footer a, form button, form input"
  )) {
    const r = el.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) continue;
    if (r.height < 32) {
      tap.push(
        (el.tagName.toLowerCase() + (typeof el.className === "string" && el.className
          ? "." + el.className.trim().split(/\s+/)[0] : "")) + ":" + Math.round(r.height) + "px"
      );
    }
  }
  return {
    vw,
    docW,
    hScroll: docW > vw + 1,
    over: over.slice(0, 6),
    clipped: clipped.slice(0, 6),
    tap: tap.slice(0, 4),
  };
})()`;

const profile = mkdtempSync(join(tmpdir(), "edge-resp-"));
const edge = spawn(
  EDGE,
  [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${profile}`,
    "about:blank",
  ],
  { stdio: "ignore", detached: false },
);

let failures = 0;
try {
  const wsUrl = await targetUrl();
  const ws = new WebSocket(wsUrl);
  await new Promise((resolve, reject) => {
    ws.addEventListener("open", resolve);
    ws.addEventListener("error", reject);
  });
  const client = new Client(ws);
  await client.send("Page.enable");
  await client.send("Runtime.enable");

  for (const [w, h, label] of VIEWPORTS) {
    await client.send("Emulation.setDeviceMetricsOverride", {
      width: w,
      height: h,
      deviceScaleFactor: 1,
      mobile: w < 900,
    });
    const lines = [];
    for (const [name, path] of PAGES) {
      await client.send("Page.navigate", { url: BASE + path });
      await sleep(700);
      const r = await client.eval(PROBE);
      if (name === "legende" && w <= 1080) {
        const menu = await client.eval(`(async () => {
          const frame = () => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
          const b = document.querySelector('button[aria-label="Menu"]');
          if (!b || getComputedStyle(b).display === "none") return null;
          b.click();
          await frame();
          const box = document.querySelector('nav div[class*="links"]');
          const links = [...box.querySelectorAll("a")];
          const rects = links.map((a) => a.getBoundingClientRect());
          const short = rects.filter((x) => x.height < 32).length;
          const outside = rects.filter(
            (x) => x.top < 0 || x.bottom > window.innerHeight + 1
          ).length;
          const scrollable = box.scrollHeight > box.clientHeight + 2;
          b.click();
          await frame();
          return { count: links.length, short, outside, scrollable, h: Math.round(rects[0].height) };
        })()`);
        if (menu) {
          if (menu.count !== 6) r.menuProblem = `menu: ${menu.count} liens au lieu de 6`;
          else if (menu.short) r.menuProblem = `menu: ${menu.short} lien(s) < 32px`;
          else if (menu.outside && !menu.scrollable)
            r.menuProblem = `menu: ${menu.outside} lien(s) hors ecran sans scroll`;
        }
      }
      const problems = [];
      if (r.hScroll) problems.push(`scroll-H ${r.docW}>${r.vw}`);
      if (r.over.length) problems.push("debord: " + r.over.join(", "));
      if (r.clipped.length) problems.push("coupe: " + r.clipped.join(", "));
      if (r.tap.length) problems.push("cible<32px: " + r.tap.join(", "));
      if (r.menuProblem) problems.push(r.menuProblem);
      if (problems.length) {
        failures++;
        lines.push(`    ${name}: ${problems.join(" | ")}`);
      }
    }
    console.log(`${String(w).padStart(4)}x${String(h).padEnd(5)} ${label.padEnd(18)} ${lines.length ? "PROBLEME" : "ok"}`);
    lines.forEach((l) => console.log(l));
  }
} finally {
  edge.kill();
}

console.log(failures ? `\n${failures} page(s) a corriger` : "\nToutes les pages sont ok");
