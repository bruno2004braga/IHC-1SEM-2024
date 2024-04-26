function calcularComissao(valorVenda, taxaComissao) {
    return (valorVenda * (taxaComissao / 100)).toFixed(2);
}

function mostrarComissao() {
    const valorVenda = parseFloat(document.getElementById("vendaInput").value);
    const taxaComissao = parseFloat(document.getElementById("taxaInput").value);
    document.getElementById("resultado").innerText = 
        "Comissão: R$ " + calcularComissao(valorVenda, taxaComissao);
}