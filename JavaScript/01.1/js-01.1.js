// VARIÁVEIS PODEM SER DECLARADAS DE 3 FORMAS:
// VAR, LET E CONST
// VAR: No geral evite o seu uso, pode não ser muito seguro.
// LET: Utilize quando for necessário reatribuir o valor da variável.
// CONST: Utilize quando não for necessário reatribuir valor da variável.

// var nome = "Diego"
// var nome = "Maria"
// let cidade = "Registro" // NÃO PODE
// let cidade = "Pariquera"
// let endereco
// endereco = "Rua Tal..."
// const idade // NÃO PODE
// const idade = 18
// idade = 20 // NÃO PODE

// TIPOS DE FUNÇÕES
// FUNÇÃO SIMPLES
const message = "<h2>Olá! Bem-vindo! Essa é sua primeira função </h2>";
function showMessage() {
  document.write(message);
}
//Invocando a função:
showMessage();

//FUNÇÃO COM PARAMÊTROS
const user = "Felipe";

function userMessage(user) {
  //Essa função agora recebe um parâmetro
  document.write(`<h3>O que deseja fazer hoje, ${user} ?</h3>`);
  // ${} -> Templeta Strings / Literal Strings
  // É usado para inserir variáveis dentro de STRINGS (CRASE)
}
userMessage(user); //ARGUMENTO
