const meusDados = {
    nome: 'João',
    sobrenome: 'Gontijo',
    moraNoBrasil: true,
    idade: 16 
}

console.log(meusDados);
console.log(meusDados.nome);
console.log(meusDados['sobrenome']);

function retornarDadoPessoal(dadopessoal) {
    return meusDados[dadopessoal]
}

console.log(retornarDadoPessoal('sobrenome'))
console.log(retornarDadoPessoal('idade'))
