import express from "express";
import FilmesController from "./controllers/FilmesController.js";
import connection from "./config/sequelize-config.js";

const app = express();

// Configurações do Express
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));

app.use("/", FilmesController);

// conectando ao banco
connection.authenticate().then(() => {
  console.log("conexão com o banco de dados feita com sucesso!");
}).catch((error) => {
  console.log(error);
});

// criando o banco
connection.query("CREATE DATABASE IF NOT EXISTS filmes;").then(() => {
  console.log("O banco de dados está criado");
}).catch(error => {
  console.log(error)
});

const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Servidor iniciado em http://localhost:${port}`);
  };
});