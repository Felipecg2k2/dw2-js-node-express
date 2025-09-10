// Importando o Express (framework)
const express = require("express");

// Iniciando o Express na variável "app"
const app = express();

// CONFIGURANDO O EJS
app.set('view engine', 'ejs')

// Criando a primeira rota do site (ROTA PRINCIPAL)
// REQ = Trata a REQUISIÇÃO / RES = Trata a RESPOSTA
app.get("/", (req, res) => {
  res.send("<h1>Hello world! Bem vindo ao meu primeiro site com Node.js e Express! =)</h1>");
});

// ROTA DE PRODUTOS
app.get("/produtos", (req, res)=>{
    res.send("<h1>Bem-vindo a página de Produtos!</h1>")
});

// ROTA DE CLIENTES
app.get("/clientes", (req, res)=>{
    res.send("<h1>Bem-vindo a página de Clientes!</h1>")
});



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

