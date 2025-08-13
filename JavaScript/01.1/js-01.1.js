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


//FUNÇÃO COM MAIS DE UM PARÂMETRO
const n1 = 10;
const n2 = 20;

function mult(n1, n2){
  //Essa função recebe dois parâmetros
  let result = n1 * n2;
  document.write(`<p>A multiplicação de ${n1} e ${n2} é igual a <strong>${result}</strong></p>`)
};

mult(n1,n2);


// FUNÇÃO COM RETONRNO
const num1 = 1000;
const num2 = 5;

function div(num1,num2){
  return num1 / num2
};
document.write(`<p>A divisão de ${num1} por ${num2} é igual a <strong>${div(num1,num2) }</strong></p>`)

// FUNÇAÕ COM DIFERENTES RETORNOS
const number = 200;

function parImpar(number){
  if(number % 2 == 0){
    return 'par';
  } else {
    return 'impar';
  };
};

document.write(`<p>O número ${number} é <strong>${parImpar(number)}</strong></p>`)