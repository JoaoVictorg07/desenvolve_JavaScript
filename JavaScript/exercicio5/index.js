const curtidas = [];

function atualizarCurtidas() {
    const nome = document.getElementById("nome").value.trim();

    if (nome && !curtidas.includes(nome)) {
        curtidas.push(nome);
    }

    const paragrafo = document.getElementById('listaCurtidas');
    if (curtidas.length === 0) {
        paragrafo.textContent = "Ninguém curtiu";
    } else if (curtidas.length === 1) {
        paragrafo.textContent = `${curtidas[0]} curtiu`;
    } else if (curtidas.length === 2) {
        paragrafo.textContent = `${curtidas[0]} e ${curtidas[1]} curtiram`;
    } else {
        paragrafo.textContent = `${curtidas[0]}, ${curtidas[1]} e mais ${curtidas.length - 2} pessoas curtiram`;
    }

    document.getElementById("nome").value = "";
}