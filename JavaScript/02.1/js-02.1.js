// ARRAYS (vetores): Servem para armazenar uma lista, ou seja, diferentes elementos em única variável.

const products = ["Computador", "Notebook", "Celular", "Tablet"];
document.write(`<p>${products}</p>`);
document.write(typeof(products));
document.write("<p>Exibindo um elemento do array através do índice:</p>");
document.write(`<p>${products[3]}</p>`);

document.write("<p>Percorrendo um array através do forEach:</p>");
products.forEach(produto => {
  document.write(`<p>${produto}</p>`)
});
document.write("<p>Mostrando os índices de valores com forEach</p>");
products.forEach((produto, i) => {
  document.write(`<p>${i+1  } - ${produto}</p>`)
})
