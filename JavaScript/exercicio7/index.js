 // Função para carregar as curtidas do localStorage ao abrir a página
 function carregarCurtidas() {
    const curtidasSalvas = JSON.parse(localStorage.getItem("curtidas")) || [];
    return curtidasSalvas;
}

// Array para armazenar os nomes das pessoas que curtiram
let curtidas = carregarCurtidas();

// Função para atualizar a lista de curtidas e exibir a mensagem adequada
function atualizarCurtidas() {
    const nome = document.getElementById("nome").value.trim();

    // Verifica se o nome não está vazio e não está duplicado na lista
    if (nome && !curtidas.includes(nome)) {
        curtidas.push(nome);
        localStorage.setItem("curtidas", JSON.stringify(curtidas)); // Armazena no localStorage
    }

    // Atualiza o parágrafo com a mensagem adequada
    atualizarParagrafo();
    document.getElementById("nome").value = ""; // Limpa o campo de texto
}

// Função para atualizar o parágrafo com a mensagem de curtidas
function atualizarParagrafo() {
    const paragrafo = document.getElementById("listaCurtidas");
    if (curtidas.length === 0) {
        paragrafo.textContent = "Ninguém curtiu";
    } else if (curtidas.length === 1) {
        paragrafo.textContent = `${curtidas[0]} curtiu`;
    } else if (curtidas.length === 2) {
        paragrafo.textContent = `${curtidas[0]} e ${curtidas[1]} curtiram`;
    } else {
        paragrafo.textContent = `${curtidas[0]}, ${curtidas[1]} e mais ${curtidas.length - 2} pessoas curtiram`;
    }
}

// Função para limpar todas as curtidas do localStorage e da lista
function limparCurtidas() {
    curtidas = [];
    localStorage.removeItem("curtidas");
    atualizarParagrafo();
}

// Atualiza a lista de curtidas ao carregar a página
window.onload = atualizarParagrafo;