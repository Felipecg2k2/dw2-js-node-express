// Objetos literais possuem Atributos e Métodos

// Objeto literal não deriva de classes

const pessoa = {};
document.write(typeof pessoa);

const carro = {
  modelo: "gol",
  cor: "vermelho",
  acelerar() {
    return "Acelerando...";
  },
  frear() {
    return "Freando...";
  },
};

// Exibindo as propriedades do objeto
document.write(`<p>O modelo do carro é ${carro.modelo}</p>`);
document.write(`<p>A cor do carro é ${carro.cor}</p>`);
document.write(`<p>${carro.acelerar()}</p>`);
document.write(`<p>${carro.frear()}</p>`);

const product = {
  nome: "Computador",
  marca: "Lenovo",
  preco: 3000,
  descricao: "PC moderno com bom desempenho.",
};
document.write(
  `<p>O ${product.nome} da marca ${product.marca} custa apenas R$${product.preco}! ${product.descricao}</p>`
);

// ARRAY DE OBJETOS (lista de produtos)
const listaProdutos = [
  {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "PC moderno com bom desempenho.",
  },
  {
    nome: "Tablet",
    marca: "Samsumg",
    preco: 2000,
    descricao: "Ótima velocidade de processamento.",
  },

  {
    nome: "Celular",
    marca: "Apple",
    preco: 6000,
    descricao: "Ultra resistente.",
  },
];

// Exibindo o Array de Objetos com forEach

listaProdutos.forEach((produto) => {
  document.write(`
        Produto: ${produto.nome}<br>
        Marca: ${produto.marca}<br>
        Preco: ${produto.preco}<br>
        Descrição: ${produto.descricao}<br><br>
        `);
});
