function estoqueBaixo(quantidade) {
    return quantidade < 5;
}
function classificarVinho(idade) {
    if (idade < 5) return "Jovem";
    if (idade < 15) return "Amadurecido";
    return "Antigo";
}
alert("Bem-vindo(a) á Vinharia Agnello!");
let anoAtual = 2025;
let usuario = prompt("Digite o nome do usuário:\n👇 ");
let senha = prompt("Digite a senha:\n👇 ");
alert("O usuário e a senha foram cadastrados no console!");

let cadastros = 1;
var cadastroVinho = prompt("Digite o nome do Vinho que deseja cadastrar:\n👇 ");
while(cadastroVinho.trim() == "" && cadastroVinho == null) {
    alert("Digite algo!");
    cadastroVinho = prompt("Digite o nome do Vinho que deseja cadastrar:\n👇 ");
}
alert("Vinho cadastrado com sucesso!");
var safra = parseInt(prompt("Qual a safra do vinho:\n👇 "));
var quantidade = parseInt(prompt("Quantos vinhos têm no estoque:\n👇 "));
var estoqueAviso = estoqueBaixo(quantidade);
var idade = anoAtual - safra;
var classificacao = classificarVinho(idade);
let continuarCadastro = prompt('Quer cadastrar mais algum vinho? (Responda apenas "sim" ou "não"):\n👇 ');
while(continuarCadastro == "sim" && continuarCadastro == "não") {
    alert('Digite apenas "sim" ou "não"!');
    continuarCadastro = prompt('Quer cadastrar mais algum vinho? (Responda "sim" ou "não":\n👇 ');
}
while(continuarCadastro == "sim") {
    cadastroVinho = prompt("Beleza! Digite outro vinho:\n👇 ");
    cadastros++;
    alert("Vinho cadastrado com sucesso!");
    var safra = parseInt(prompt("Qual a safra do vinho:\n👇 "));
    var quantidade = parseInt(prompt("Quantos vinhos têm no estoque:\n👇 "));
    var estoqueAviso = estoqueBaixo(quantidade);
    var idade = anoAtual - safra;
    var classificacao = classificarVinho(idade);
    continuarCadastro = prompt('Quer cadastrar mais algum vinho? (Responda "sim" ou "não":\n👇 ');
    while(continuarCadastro == "sim" && continuarCadastro == "não") {
        alert('Digite apenas "sim" ou "não"!');
        continuarCadastro = prompt('Quer cadastrar mais algum vinho? (Responda "sim" ou "não":\n👇 ');
        mostrarDados(cadastroVinho, safra, quantidade, classificacao, estoqueAviso);
    }
}
if (continuarCadastro == "não") {
    alert("Obrigado!");
}
function mostrarDados(usuario, senha, cadastroVinho, safra, quantidade, classificacao, estoqueAviso, cadastros) {
    console.log("===== Dados Cadastrados =====");
    console.log("Usuário Cadastrado: " + usuario);
    console.log("Senha Cadastrada: " + senha);
    console.log("Vinho cadastrado:" + cadastroVinho);
    console.log("Safra: " + safra);
    console.log("Quantidade: " + quantidade);
    console.log("Classificação: " + classificacao);
    if (estoqueAviso) {
        console.log("Estoque baixo!");
    }
    console.log(`Número de Cadastros: ${cadastros}`);
}
mostrarDados(usuario, senha, cadastroVinho, safra, quantidade, classificacao, estoqueAviso, cadastros);
mostrarDados(cadastroVinho, safra, quantidade, classificacao, estoqueAviso);