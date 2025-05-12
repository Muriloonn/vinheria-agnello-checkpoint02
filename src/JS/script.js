function limparTexto(texto) {
    return texto;
}
function converterNumero(numero) {
    return Number(numero);
}
function estoqueBaixo(quantidade) {
    return quantidade < 5;
}
function classificarVinho(idade) {
    if (idade < 5) return "Jovem";
    if (idade < 15) return "Amadurecido";
    return "Antigo";
}
function mostrarDados(nome, safra, quantidade, classificacao, estoqueAviso) {
    console.log("===== Vinho Cadastrado =====");
    console.log("Nome: " + nome);
    console.log("Safra: " + safra);
    console.log("Quantidade: " + quantidade);
    console.log("Classificação: " + classificacao);
    if (estoqueAviso) {
        console.log("Estoque baixo!");
    }
    alert("Vinho '" + nome + "' cadastrado com sucesso!");
}