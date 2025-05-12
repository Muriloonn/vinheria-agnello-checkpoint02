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
function mostrarDados(usuario, senha, safra, quantidade, classificacao, estoqueAviso) {
    console.log("===== Vinho Cadastrado =====");
    console.log("Usuário Cadastrado: " + usuario);
    console.log("Senha Cadastrada: " + senha);
    console.log("Safra: " + safra);
    console.log("Quantidade: " + quantidade);
    console.log("Classificação: " + classificacao);
    if (estoqueAviso) {
        console.log("Estoque baixo!");
    }
    alert("Usuário: " + usuario + "\nSenha: " + senha);
    let vinhoCadastrado = "Vinho cadastrado!\n";
    vinhoCadastrado += "Safra: " + safra + "\n";
    vinhoCadastrado += "Quantidade: " + quantidade + "\n";
    vinhoCadastrado += "Classificação: " + classificacao + "\n";
    if (estoqueAviso) {
        vinhoCadastrado += "Estoque baixo!";
    }
    alert(vinhoCadastrado);
}
