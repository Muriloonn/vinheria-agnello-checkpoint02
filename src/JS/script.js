function estoqueBaixo(quantidade) {
    return quantidade < 5;
}

function classificarVinho(idade) {
    if (idade < 5) return "Jovem";
    if (idade < 15) return "Amadurecido";
    return "Antigo";
}

alert("Bem-vindo(a) à Vinharia Agnello!");
let anoAtual = 2025;
let usuario = prompt("Digite o nome do usuário:\n👇 ");
let senha = prompt("Digite a senha:\n👇 ");
alert("O usuário e a senha foram cadastrados no console!");

let cadastros = 1;
let ehPrimeiroCadastro = true;  
var cadastroVinho = prompt("Digite o nome do Vinho que deseja cadastrar:\n👇 ");
while (cadastroVinho === null || cadastroVinho.trim() === "") {
    alert("Digite algo!");
    cadastroVinho = prompt("Digite o nome do Vinho que deseja cadastrar:\n👇 ");
}
alert("Vinho cadastrado com sucesso!");

var safra = parseInt(prompt("Qual a safra do vinho:\n👇 "));
while (isNaN(safra)) {
    alert("Digite um ano válido.");
    safra = parseInt(prompt("Qual a safra do vinho:\n👇 "));
}

var quantidade = parseInt(prompt("Quantos vinhos têm no estoque:\n👇 "));
while (isNaN(quantidade)) {
    alert("Digite uma quantidade válida. ");
    quantidade = parseInt(prompt("Quantos vinhos têm no estoque:\n👇 "));
}

var estoqueAviso = estoqueBaixo(quantidade);
var idade = anoAtual - safra;
var classificacao = classificarVinho(idade);

mostrarDados(usuario, senha, cadastroVinho, safra, quantidade, classificacao, estoqueAviso, cadastros, ehPrimeiroCadastro);

ehPrimeiroCadastro = false;

let continuarCadastro = prompt('Quer cadastrar mais algum vinho? (Responda apenas "sim" ou "não"):\n👇 ');
while (continuarCadastro == "sim" || continuarCadastro == "não") {
    if (continuarCadastro == "sim") {
        cadastroVinho = prompt("Beleza! Digite outro vinho:\n👇 ");
        while (cadastroVinho === null || cadastroVinho.trim() === "") {
            alert("Digite algo!");
            cadastroVinho = prompt("Beleza! Digite outro vinho:\n👇 ");
        }
        cadastros++;
        alert("Vinho cadastrado com sucesso!");

        var safra = parseInt(prompt("Qual a safra do vinho:\n👇 "));
        while (isNaN(safra)) {
            alert("Digite um ano válido.");
            safra = parseInt(prompt("Qual a safra do vinho:\n👇 "));
        }

        var quantidade = parseInt(prompt("Quantos vinhos têm no estoque:\n👇 "));
        while (isNaN(quantidade)) {
            alert("Digite uma quantidade válida. ");
            quantidade = parseInt(prompt("Quantos vinhos têm no estoque:\n👇 "));
        }

        var estoqueAviso = estoqueBaixo(quantidade);
        var idade = anoAtual - safra;
        var classificacao = classificarVinho(idade);

        mostrarDados(usuario, senha, cadastroVinho, safra, quantidade, classificacao, estoqueAviso, cadastros, ehPrimeiroCadastro);
    } else {
        break;
    }
    continuarCadastro = prompt('Quer cadastrar mais algum vinho? (Responda apenas "sim" ou "não"):\n👇 ');
}

if (continuarCadastro == "não") {
    alert("Obrigado!");
}

function mostrarDados(usuario, senha, cadastroVinho, safra, quantidade, classificacao, estoqueAviso, cadastros, ehPrimeiroCadastro) {
    if (ehPrimeiroCadastro) {
        console.log("===== Vinho cadastrado =====");
        console.log("Usuário Cadastrado: " + usuario);
        console.log("Senha Cadastrada: " + senha);
    } else {
        console.log("===== Novo vinho cadastrado =====");
    }

    console.log("Vinho cadastrado: " + cadastroVinho);
    console.log("Safra: " + safra);
    console.log("Quantidade: " + quantidade);
    console.log("Classificação: " + classificacao);
    if (estoqueAviso) {
        console.log("Estoque baixo!");
    }
    console.log(`Número de Cadastros: ${cadastros}`);
}
