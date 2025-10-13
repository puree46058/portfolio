import fs from "node:fs";
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import cors from "cors";
import siteContent from "./siteContent.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ?? 3000;

const viewsPath = path.join(__dirname, "views");
const clientRoot = path.resolve(__dirname, "../../client");
const distRoot = path.join(clientRoot, "dist");
const manifestPath = path.join(distRoot, "manifest.json");

let manifest = null;

if (fs.existsSync(manifestPath)) {
  try {
    manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  } catch (error) {
    console.error("Unable to read Vite manifest:", error);
  }
}

const resolveAsset = (entry) => {
  if (manifest && manifest[entry]) {
    return {
      script: `/client/dist/${manifest[entry].file}`,
      css: (manifest[entry].css ?? []).map((href) => `/client/dist/${href}`),
      devClient: null,
    };
  }

  return {
    script: `http://localhost:5173/${entry}`,
    css: [`http://localhost:5173/src/main.css`],
    devClient: "http://localhost:5173/@vite/client",
  };
};

app.set("view engine", "ejs");
app.set("views", viewsPath);

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      "http://localhost:3000",
      "http://127.0.0.1:3000",
    ],
  }),
);
app.use("/asset", express.static(path.resolve(__dirname, "../../asset")));
app.use("/pdf", express.static(path.resolve(__dirname, "../../pdf")));
app.use("/client/dist", express.static(distRoot, { index: false }));
app.use("/client/src", express.static(path.join(clientRoot, "src")));
app.use("/client/styles.css", express.static(path.join(clientRoot, "styles.css")));

app.get("/api/content", (_req, res) => {
  res.json(siteContent);
});

app.get("*", (_req, res) => {
  const entryAssets = resolveAsset("src/main.jsx");

  res.render("index", {
    siteContent,
    entryAssets,
  });
});

app.listen(PORT, () => {
  console.log(`Portfolio server running at http://localhost:${PORT}`);
});
