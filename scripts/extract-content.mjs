import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "fs";
import { join, dirname } from "path";

const BACKUP_DIR = "/Users/ula/Downloads/Archive/agrada_backup/pages";
const PROJECT_DIR = "/Users/ula/Desktop/agrada";
const DATA_DIR = join(PROJECT_DIR, "src/data/pages");
const APP_DIR = join(PROJECT_DIR, "app");

const SKIP_PARAGRAPHS = [
  "Podziel się na:",
  "\u00a9Agrada.art - TEATR W DRODZE",
];

const SLUG_TO_ROUTE = {
  akcje: "dzialania",
  "aktualnie-gramy": "spektakle/aktualnie-gramy",
  artysci: "osoby",
  "cat-1": "news",
  "do-pobrania": "o-teatrze/do-pobrania",
  doswiadczenie: "oferta/doswiadczenie",
  ewaluacje: "oferta/ewaluacje",
  "galeria-inne": "galeria/inne",
  "galeria-warsztaty": "galeria/warsztaty",
  gralismy: "spektakle/gralismy",
  "historia-agrady": "o-teatrze",
  kontakt: "kontakt",
  prasa: "o-teatrze/prasa",
  program: "oferta",
  projekty: "dzialania/projekty",
  przyjaciele: "osoby/przyjaciele",
  repertuar: "spektakle",
  "sapina-galeria": "sapina/galeria",
  "sapina-historia": "sapina",
  "sapina-spektakle": "sapina/spektakle",
  video: "o-teatrze/video",
  zapowiedzi: "spektakle/zapowiedzi",
};

function routeToPascalName(route) {
  return route
    .split("/")
    .map((seg) =>
      seg
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join("")
    )
    .join("") + "Page";
}

function generatePageTsx(route, functionName) {
  const dataPath = route;
  return `import data from "@/src/data/pages/${dataPath}.json";

export default function ${functionName}() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-accent mb-8">{data.title}</h2>
      <div className="space-y-4 text-secondary text-sm leading-relaxed">
        {data.paragraphs.map((p: string, i: number) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </main>
  );
}
`;
}

const files = readdirSync(BACKUP_DIR).filter((f) => f.endsWith(".json"));

for (const file of files) {
  const slug = file.replace(".json", "");

  if (slug === "homepage") {
    console.log(`SKIP: ${slug} (homepage)`);
    continue;
  }

  const route = SLUG_TO_ROUTE[slug];
  if (!route) {
    console.log(`SKIP: ${slug} (no mapping)`);
    continue;
  }

  const raw = JSON.parse(readFileSync(join(BACKUP_DIR, file), "utf-8"));

  const title = raw.first_h2 || raw.title_tag || slug;
  const paragraphs = (raw.paragraphs || [])
    .map((p) => p.text)
    .filter((t) => !SKIP_PARAGRAPHS.includes(t));

  const dataObj = { title, paragraphs };

  // Write data JSON
  const dataFile = join(DATA_DIR, `${route}.json`);
  mkdirSync(dirname(dataFile), { recursive: true });
  writeFileSync(dataFile, JSON.stringify(dataObj, null, 2) + "\n");
  console.log(`DATA: ${dataFile}`);

  // Write page.tsx
  const funcName = routeToPascalName(route);
  const pageTsx = generatePageTsx(route, funcName);
  const pageFile = join(APP_DIR, route, "page.tsx");
  mkdirSync(dirname(pageFile), { recursive: true });
  writeFileSync(pageFile, pageTsx);
  console.log(`PAGE: ${pageFile} (${funcName})`);
}

console.log("\nDone!");
