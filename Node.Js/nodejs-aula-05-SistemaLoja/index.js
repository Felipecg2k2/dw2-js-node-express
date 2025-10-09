// Importando o Express com ES6 Modules
import express from "express";
// Importando o Sequelize (arquivo de conexão)
import connection from "./config/sequelize-config.js";
// Importando o Model
import Cliente from "./models/Cliente.js";
// Iniciando o Express na variável app
const app = express();
// Importando os Controllers (onde estão as rotas)
import ClientesController from "./controllers/ClientesController.js";
import ProdutosController from "./controllers/ProdutosController.js";
import PedidosController from "./controllers/PedidosController.js";

// Configurando o express para permitir o recebimento de dados vindo de formulários
app.use(express.urlencoded({extended: false}))

// Define o EJS como Renderizador de páginas
app.set("view engine", "ejs");
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static("public"));

// Definindo o uso das rotas dos Controllers
app.use("/", ClientesController);
app.use("/", ProdutosController);
app.use("/", PedidosController);

// Realizando a conexão com o banco de dados
// then() e catch() estão tratando a resolução da promessa
connection.authenticate().then(() => {
  console.log("Conexão com o banco de dados realizada com sucesso!")
}).catch(error => {
  console.log(error);
});

// Criando o banco de dados (se ele ainda não existir)
connection.query(`CREATE DATABASE IF NOT EXISTS nossaloja;`).then(() => {
  console.log("O banco de dados está criado.")
}).catch((error) => {
  console.log(error);
});

// ROTA PRINCIPAL
app.get("/", function (req, res) {
  res.render("index");
});

// INICIA O SERVIDOR NA PORTA 8080
const port = 8080;
app.listen(port, function (error) {
  if (error) {
    console.log(`Não foi possível iniciar o servidor. Erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em http://localhost:${port} !`);
  }
});
