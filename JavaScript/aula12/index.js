const meusDados = {
    nome: 'João',
    sobrenome: 'Gontijo',
    moraNoBrasil: true,
    idade: 16,
    pegaDocumento: () => {
        console.log('CPF: 12345678901')
    }
}

//verificando se o objeto possui determinado valor
function ObjetoPossuiValor(valorDaChave) {
    const valoresDoObjeto = Object.values(meusDados)
    return valoresDoObjeto.includes(valorDaChave)
}

console.log(ObjetoPossuiValor(16))
console.log(ObjetoPossuiValor(17))
console.log('----------------------------');

function ObjetoPossuiChave(nomeDaChave) {
    const valoresDoObjeto = Object.keys(meusDados)
    return valoresDoObjeto.includes(nomeDaChave)
}

console.log(ObjetoPossuiChave('nome'))
console.log(ObjetoPossuiChave('sobrenome'))
console.log(ObjetoPossuiChave('moraNoBrasil'))
console.log(ObjetoPossuiChave('idade'))

meusDados.pegaDocumento()

//utilidades do console
console.error('deu ruim');
console.warn('atenção');
console.info('informação')