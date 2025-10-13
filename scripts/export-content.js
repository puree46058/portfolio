import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const src = path.resolve(__dirname, "../src/server/siteContent.js");
  const outDir = path.resolve(__dirname, "../client/public");
  const out = path.join(outDir, "content.json");

  try {
    const mod = await import(pathToFileURL(src));
    const data = mod.default ?? mod.siteContent ?? null;
    if (!data) {
      throw new Error("siteContent not found in module export");
    }
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
    fs.writeFileSync(out, JSON.stringify(data, null, 2), "utf8");
    console.log(`Wrote static content to ${out}`);
  } catch (err) {
    console.error("Failed to export site content:", err.message);
    process.exitCode = 1;
  }
}

main();
