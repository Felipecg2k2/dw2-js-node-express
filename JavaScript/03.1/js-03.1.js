// CLASSES NO JAVASCRIPT

// Criando uma classe

// Nomes de classes devem iniciar com a primeira letra maiúscula
class Carro {
  // Para criar os ATRIBUTOS da Classe deve-se utilizar o método "constructor"
  constructor(marca, modelo, ano) {
    // this representa a instância (objeto)
    // O valor que for enviado a classe será atribuido a instância
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  // MÉTODOS
  buzinar() {
    return "Beep! Beep!";
  }
}

// Criando INSTÂNCIAS (objetos) derivadas da Classe Carro
// Objeto - Carro Popular
const carroPopular = new Carro("Fiat", "Uno", 2012);

document.write(
  `<p>O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano de ${
    carroPopular.ano
  }. Quando buzina faz ${carroPopular.buzinar()}</p>`
);

// Objeto - Carro Esportivo

const carroEsportivo = new Carro();
carroEsportivo.marca = "Chrevrolet";
carroEsportivo.modelo = "Camaro";
carroEsportivo.ano = 2024;

document.write(
  `<p>O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano de ${
    carroEsportivo.ano
  }. Quando buzina faz ${carroEsportivo.buzinar()}</p>`
);

// Adicionar um novo atributo 
carroEsportivo.corNeon = "Azul";

// Adicionar um novo método
carroEsportivo.turbo = ()=>{
  return "Vruuuuuuum! o carro acelera muito!!!"



  
};

document.write(`<p>O carro ${carroEsportivo.marca} ${carroEsportivo.modelo} também possui neon da cor ${carroEsportivo.corNeon}. E quando usa turbo ${carroEsportivo.turbo()}</p>`)