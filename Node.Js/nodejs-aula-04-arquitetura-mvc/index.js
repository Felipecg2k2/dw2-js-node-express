// Importando o Express (framework)
import express from "express"
// Iniciando o Express na variável "app"
const app = express();


// Importando os Controller (onde estão as rotas e onde é tratado as requisições)
import ClientesController from "./controllers/ClientesController.js"

// CONFIGURANDO O EJS
app.set('view engine', 'ejs')
// Definindo a pasta PUBLIC para Arquivos Estáticos
app.use(express.static("public"));

// DEFININDO O USO DAS ROTAS QUE ESTÃO NOS CONTROLLERS
app.use("/", ClientesController)

// (ROTA PRINCIPAL) - Criando a primeira rota do site
// REQ = Trata a REQUISIÇÃO / RES = Trata a Resposta
app.get("/", (req, res) => {
   res.render("index")
});

// Rota DE PRODUTOS
app.get("/produtos", (req, res) => {
  // const produtos = ['Computador', 'Celular', 'Tablet', 'Notebook'];

  // Array de objetos com os produtos
  const produtos = [
    {nome: "Celular", preco: 3000},
    {nome: "Computador", preco: 4000},
    {nome: "Tablet", preco: 2000},
    {nome: "Notebook", preco: 3800},
  ];

  res.render("produtos", {
    produtos : produtos,
  });
});



// ROTA DE PERFIL
app.get("/perfil", (req, res) => {
  // Criando a variável que será enviada para a página
  const user = "Diego Max"
  res.render("perfil", {
    // Enviando variáveis para a página EJS (HTML)
    user : user
  });
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