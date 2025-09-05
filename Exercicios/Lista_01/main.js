let nomeUsu = prompt("Digite o seu nome:");
let num1 = prompt("Digite o primeiro número:");
let operador = prompt("Digite o operador:");
let num2 = prompt("Digite o segundo número:");
let numDobro = prompt("Digite um número que deseja dobrar:");
let numMeio = prompt("Digite um número que deseja saber a metade:");


function saudacaoPersonlaizada(nomeUsu){
    document.write(`<h2>Olá, ${nomeUsu}! Bem-vindo(a) a Calculadora Universal!</h2>`);
};
saudacaoPersonlaizada(nomeUsu);

function operacaoMatematica(num1,operador,num2){
    return eval(`${num1}${operador}${num2}`);
};
document.write(`<br>O resultado de ${num1}${operador}${num2} é igual a ${operacaoMatematica(num1,operador,num2)}</br>`);

const calcularDobro = function (numDobro){
    return numDobro*2;
}
document.writeln(`<br>O número ${numDobro} ao dobro é ${calcularDobro(numDobro)}</br>`);

const calcularMetade = numMeio => {
    return numMeio/2;
}
document.writeln(`<br>O número ${numMeio} pela metade é ${calcularMetade(numMeio)}</br>`);

const iife = (function(){
    document.write("<h3>Calculadora Universal pronta para uso!</h3>");
})();
