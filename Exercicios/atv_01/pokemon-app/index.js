import express from "express"
const app = express();

import ClientesController from "./controllers/ClientesController.js"

app.set('view engine', 'ejs')
app.use(express.static("public"));

app.use("/", ClientesController)

app.get("/", (req, res) => {
   res.render("index")
});

// Rota DE POKEMON
app.get("/pokemons", (req, res) => {
  res.render("pokemon", {
    pokemon : pokemon,
  });
});

// ROTA DE TIPO
app.get("/tipo", (req, res) => {
  res.render("tipos", {
  });
});

// ROTA DE TREINADORES
app.get("/treinadores", (req, res) => {
  res.render("treinadores", {
    treinadores: treinadores
  });
});
const port = 8080;

app.listen(port, (error) => {
  if (error) {
    console.log(
      `Não foi possível iniciar o servidor. Ocorreu um erro! ${error}`
    );
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});