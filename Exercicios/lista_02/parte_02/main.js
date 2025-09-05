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

document.write(`${batman.investigar()}<br>`);
document.write(`A vida do Batman está em ${batman.vida}.`);
document.write("<br>");
document.write("<br>");
document.write(`${superman.atacar()}<br>`);
document.write(`${superman.visaoCalor()}`);
document.write("<br>");
document.write("<br>");
document.write(`${homemAranha.sentidoAranha()}`); 
document.write("<br>");
document.write(`A força do Homem-Aranha é ${homemAranha.forca}.`);