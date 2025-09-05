let listaClientes = [{
    nome: "Felipe",
    endereco: "Rua A, 123",
    cpf: 12345678900,
},
{
    nome: "Kaio",
    endereco: "Rua B, 456",
    cpf: 98765432100,
},
{
    nome: "Ricardo",
    endereco: "Rua C, 789",
    cpf: 11122233344,
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
    cpf: 55566677788,
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
    cpf: 99988877766,
});

document.write("<h3>Após adicionar um novo cliente no início do array:</h3>");
listaClientes.forEach((cliente) => {
    document.write(`
        Nome: ${cliente.nome}<br>
        Endereço: ${cliente.endereco}<br>
        CPF: ${cliente.cpf}<br><br>
    `);})