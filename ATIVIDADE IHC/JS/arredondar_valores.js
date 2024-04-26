function arredondarValor(valor) {
    return Math.round(valor);
}

function mostrarValorArredondado() {
    const valor = parseFloat(document.getElementById("valorInput").value);
    document.getElementById("resultado").innerText = "Valor arredondado: " + arredondarValor(valor);
}