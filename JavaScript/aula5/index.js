function chamaPrimeiro() {
    console.log('Chama essa primeiro'); //callback chamar uma fucção dentro da outra
}

function chamaDepois() {
    console.log('entro na segunda função')
    chamaPrimeiro();
}

function recebePrimeira(primeiraFunção) {
    primeiraFunção();
}

recebePrimeira(chamaDepois);