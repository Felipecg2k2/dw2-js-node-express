// Capturando elementos do DOM

// const parar = document.querySelector("#parar");
// parar.style.backgroundColor = "red"


function parar(){
    document.querySelector("#parar").style.background = "red";
    document.querySelector("#atencao").style.backgroundColor = "gray";
    document.querySelector("#prosseguir").style.backgroundColor = "gray";
}

function atencao(){
    document.querySelector("#atencao").style.background = "yellow";
    document.querySelector("#parar").style.backgroundColor = "gray";
    document.querySelector("#prosseguir").style.backgroundColor = "gray";
}

function prosseguir(){
    document.querySelector("#prosseguir").style.background = "green";
    document.querySelector("#atencao").style.backgroundColor = "gray";
    document.querySelector("#parar").style.backgroundColor = "gray";
}