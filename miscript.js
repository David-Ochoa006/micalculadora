const valor = document.getElementById('valor');
const historial = document.getElementById('historial')
let elResultado = false;

function agregarvalor(digito) {
    if (elResultado) {
        
        if (["+","-","*","/"].includes(digito)) {
            elResultado = false; 
            valor.textContent += digito; 
        }
    }

    else {
        if (valor.textContent === "0"){
        valor.textContent = digito; 
    } 
    else {
        valor.textContent += digito;
    }}
    

}

function calcular(){
    try{
        historial.textContent = valor.textContent;
        valor.textContent = eval(valor.textContent);
        elResultado = true;
    }
    catch (error) {
        valor.textContent = "Error";
    }
}

function  limpiarValor() {
    valor.textContent = "0";
    historial.textContent = "";
    elResultado = false;
}

function borrarUltimo() {
    if (valor.textContent.length > 1) {
        valor.textContent = valor.textContent.slice(0, -1);
    } else {
        valor.textContent = "0";
    }
}