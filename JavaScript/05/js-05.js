// MANIPULAÇÃO DE DATAS
document.write(`<h3>Manipulando datas: </h3>`)
 
// Criar uma instância da classe Date() no javascript
const dataAtual = new Date();
document.write(dataAtual);

// Pegando o dia atual:
const dia = dataAtual.getDate();
document.write(`<p>Hoje é dia: ${dia}</p>`);

// Pegando o dia da semana atual:
const diaSemana = dataAtual.getDay();
document.write(`<p>Dia da semana: ${diaSemana}</p>`);

// Pegando o mês atual atual:
const mes = dataAtual.getMonth()+1;
document.write(`<p>Estamos no mês: ${mes}</p>`);

// Pegando o ano atual atual:
const ano = dataAtual.getFullYear();
document.write(`<p>Estamos no ano: ${ano}</p>`);


// Adicando Dias, Mêses e Anos à data atual
// Adicionando 4 anos ao ano atual
dataAtual.setFullYear(dataAtual.getFullYear() + 4);
document.write(`<p>Daqui a 4 anos será: ${dataAtual.getFullYear()}</p>`);

// Adicionando mêses
dataAtual.setMonth(dataAtual.getMonth() + 3);
document.write(`<p>Daqui a 3 meses será: ${dataAtual.getMonth()}</p>`);

// Adicionando dias
dataAtual.setDate(dataAtual.getDate() + 5);
document.write(`<p>Daqui a 5 dias será: ${dataAtual.getDate()}</p>`);


// FORMATAÇÃO DE MOEDAS
// REAL
const salario = 1512;
const salarioReal = salario.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
});

document.write(`<p> O valor do salário mínimo atual é ${salarioReal}. </p>`);

// DÓLAR
const salarioDolar = salario.toLocaleString("pt-br",{
    style: "currency",
    currency: "USD"
})
const salarioConvertido = salario * 0.176;

document.write(`<p> O valor do salário mínimo atual em dólar é ${salarioConvertido.toLocaleString("en",{
    style: "currency",
    currency: "USD"
})}. </p>`);

// currency : EUR -> Euro

// FORMATAÇÃO DE STRING (Textos)
document.write(`<h3>Formatação de Strings:</h3>`);
const nome = "Felipe Guedes";

// ALTERANDO PARA LETRAS MAÍSCULAS
document.write(`<p>Nome em maiúsculas: ${nome.toLocaleUpperCase()}</p>`);
// ALTERANDO PARA LETRAS MINÚSCULAS
document.write(`<p>Nome em minúsculas: ${nome.toLocaleLowerCase()}</p>`);

// REMOVENDO ESPAÇOS DA STRING
const novoNome = nome.replace(/\s/g, "")

// CONTANDO CARACTERES DE UMA STRING
document.write(`<p>Esse nome tem: ${novoNome.length} letras</p>`)
