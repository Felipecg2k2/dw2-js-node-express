// Importando o Express (framework)
const express = require("express");

// Iniciando o Express na variável "app"
const app = express();

// CONFIGURANDO O EJS
app.set("view engine", "ejs");

// Criando a primeira rota do site (ROTA PRINCIPAL)
// REQ = Trata a REQUISIÇÃO / RES = Trata a RESPOSTA
app.get("/", (req, res) => {
  res.render("index");
});

// ROTA DE PRODUTOS
app.get("/produtos", (req, res) => {
  // const produtos = ['Computador','Celular','Tablet','Notebook'];

  // Array de objetos com os produtos
  const produtos = [
    {nome: "Celular", preco: 3000},
    {nome: "Computador", preco: 4000},
    {nome: "Tablet", preco: 2000},
    {nome: "Notebook", preco: 3800}
  ];

  res.render("produtos", {
    produtos : produtos
  });
});

// ROTA DE CLIENTES
app.get("/clientes", (req, res) => {
  const clientes = [
    {nome: "Ricardo", cpf: "123.456.789-00", endereco: "Rua das Flores, 34"},
    {nome: "Isaac", cpf: "123.456.789-00", endereco: "Rua Diamante, 100"},
    {nome: "Renan", cpf: "123.456.789-00", endereco: "Rua Curitiba, 22"},
    {nome: "Ana Flávia", cpf: "123.456.789-00", endereco: "Rua Ceará, 30"},
  ]
  res.render("clientes", {
    clientes : clientes
  });
});

// ROTA PERFIL
app.get("/perfil", (req, res) => {
  // Criando a variável que será enviada para a página
  const user = "Felipe Guedes";
  res.render("perfil", {
    // Enviando variáveis para a página EJS (HTML)
    user : user
  })
});

// ROTA PEDIDOS
app.get("/pedidos", (req, res)=>{
  const pedidos = [
    {num: 1, produto: "Lápis", valor: 1.00},
    {num: 2, produto: "Caneta", valor: 1.50},
    {num: 3, produto: "Borracha", valor: 1.20},
    {num: 4, produto: "Apontador", valor: 2.00},
  ]
  res.render("pedidos", {
    pedidos : pedidos
  })
})

// Iniciando o Servidor HTTP
// O servidor escutará na porta 8080
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
