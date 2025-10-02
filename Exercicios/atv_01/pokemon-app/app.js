import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import indexRoutes from "./routes/indexRoutes.js";
import pokemonRoutes from "./routes/pokemonRoutes.js";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRoutes);
app.use("/pokemons", pokemonRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});