const todoMundoVe = 'Todo mundo ve esta variavel de escopo global'

function executaEscopoGlobal() {
    console.log(todoMundoVe)
}

function executaEscopoLocal() {
    const visivelEmEscopoLocal = 'Só quem estra dentro do bloco da função vê está variavel de escopo local'
    console.log(visivelEmEscopoLocal)

    function chamaDentroDoEscopo() {
        console.log('dentro do escopo =>', visivelEmEscopoLocal)
        const dentroDoLocal = false;
        console.log(dentroDoLocal)
    }

    chamaDentroDoEscopo()
}

executaEscopoGlobal();

executaEscopoLocal();

executaEscopoLocal();