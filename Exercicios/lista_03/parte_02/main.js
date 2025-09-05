dataAtual = new Date();
document.write(dataAtual);

const compraInternacional = 500.75;
const compraDolar = compraInternacional.toLocaleString("pt-br",{
    style: "currency",
    currency: "USD"
})

const compra = compraInternacional * 0.176;

document.write(`<p> O valor da sua compra em dólar é: ${compra.toLocaleString("en",{
    style: "currency",
    currency: "USD"
})}. </p>`);


const compraReal = compraInternacional.toLocaleString("pt-br",{
    style: "currency",
    currency: "BRL"
})

document.write(`<p> O valor da sua compra em dólar é: ${compraReal.toLocaleString("en",{
    style: "currency",
    currency: "BRl"
})}. </p>`);


const dataEntrega = new Date();
dataEntrega.setDate(dataEntrega.getDate() + 12);
const dia = String(dataEntrega.getDate()).padStart(2, '0');
const mes = String(dataEntrega.getMonth() + 1).padStart(2, '0');
const ano = dataEntrega.getFullYear();
const dataEntregaFormatada = `${dia}/${mes}/${ano}`;

document.write("<strong>Data estimada de entrega:</strong> " + dataEntregaFormatada);