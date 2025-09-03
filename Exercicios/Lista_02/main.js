let listaClientes = [{
    nome: "Felipe",
    endereco: "Rua A, 123",
    cpf: "123.456.789-00",
},
{
    nome: "Kaio",
    endereco: "Rua B, 456",
    cpf: "987.654.321-00",
},
{
    nome: "Ricardo",
    endereco: "Rua C, 789",
    cpf: "111.222.333-44",
}];
    
listaClientes.forEach((cliente) => {
    document.write(`
        Nome: ${cliente.nome}<br>
        Endereço: ${cliente.endereco}<br>
        CPF: ${cliente.cpf}<br><br>
    `);
});

listaClientes.push({
    nome: "Rogério",
    endereco: "Rua D, 101",
    cpf: "555.666.777-88",
});

document.write("<h3>Após adicionar um novo cliente no final do array:</h3>");
listaClientes.forEach((cliente) => {
    document.write(`
        Nome: ${cliente.nome}<br>
        Endereço: ${cliente.endereco}<br>
        CPF: ${cliente.cpf}<br><br>
    `);})


listaClientes.unshift({
    nome: "Camila",
    endereco: "Rua E, 202",
    cpf: "999.888.777-66",
});

document.write("<h3>Após adicionar um novo cliente no início do array:</h3>");
listaClientes.forEach((cliente) => {
    document.write(`
        Nome: ${cliente.nome}<br>
        Endereço: ${cliente.endereco}<br>
        CPF: ${cliente.cpf}<br><br>
    `);})


document.write(`<h2>Parte 2 - Classes: Fábrica de Heróis</h2>`)

class heroi {
    constructor(nome, vida, velocidade, forca) {
        this.nome = nome;
        this.vida = vida;
        this.velocidade = velocidade;
        this.forca = forca;
    }
    correr(){
        return`${this.nome} está correndo!`
    }
    andar(){
        return`${this.nome} está andando!`
    }
    atacar(){
        return`${this.nome} está atacando!`
    }
    defender(){
        return`${this.nome} está se defendendo!`
    }
};

const homemAranha = new heroi();
homemAranha.nome = "Homem Aranha";
homemAranha.vida = 100;
homemAranha.velocidade = 80;
homemAranha.forca = 75;
homemAranha.teia = 1;
homemAranha.sentidoAranha = ()=>{
    return`${homemAranha.nome} detectou perigo com seu sentido aranha!`
}

const superman = new heroi();
superman.nome = "Superman";
superman.vida = 1000;
superman.velocidade = 950;
superman.forca = 1000;
superman.podeVoar = 1;
superman.visaoCalor = ()=>{
    return`${superman.nome} está usando sua visão de calor!`
}

const batman = new heroi();
batman.nome = "Batman";
batman.vida = 100;
batman.velocidade = 70;
batman.forca = 70;
batman.esconder = 0;
batman.investigar = ()=>{
    return`${batman.nome} está investigando um crime!`
}

document.write(batman.investigar());
document.write("<br>");
document.write(superman.atacar());
document.write("<br>");
document.write(homemAranha.sentidoAranha()); 