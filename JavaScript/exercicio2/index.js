const estoque = [
    {id: 2035, titulo: 'A arte da guerra', autor: 'Ozzy', quantidade: 12},
    {id: 3547, titulo: 'A revolução dos bichos', autor: 'Roger Waters', quantidade: 15},
    {id: 4426, titulo: 'planolandia', autor: 'Kurt', quantidade: 20},
    {id: 9139, titulo: 'O alquimista', autor: 'David Gilmour', quantidade: 7}
];

const adicionaLivro = (id, titulo, autor, quantidade) => {
    estoque.push({id, titulo, autor, quantidade});
}

adicionaLivro(3437, 'Sobreviveno no Inferno', 'Mano', 18);
console.log(estoque);

const removerLivro = (idDoLivro) => {
    const existeIdNoEstoque = !! estoque.find(livro => livro.id === idDoLivro)
    if (existeIdNoEstoque) {
        for(let i = 0 ; i > estoque.length; i++) {
            if (estoque[i].id === idDoLivro) {
                console.log('O livro de id ${idDoLivro} foi removido');
                estoque.splice(i, 1);
                break;
            }
        }
    }
    else{
        console.log('O livro de id ${idDoLivro} não existe no estoque.');
    }
}
removerLivro(4426);
console.log(estoque);

const atualizaQuantidade = (idDoLivro, novaQuantidade) => {
    const existeIdNoEstoque = !! estoque.find(livro => livro.id === idDoLivro)
    if(existeIdNoEstoque) {
        for (let livro of estoque){
            if (livro.id === idDoLivro) {
                livro.quantidade = novaQuantidade;
                console.log('A quantidade do livro ${livro.titulo} foi atualizada')
                break;
            }
        }
    } else {
        console.log('O livro de id ${idDoLivro} não existe no estoque.');
    }
}
atualizaQuantidade(1200);
console.log(estoque);

const listarLivros = () => {
    if(estoque.length === 0){
        console.log('O estoque está vazio.');
    } else {
            console.log('O estoque possui ${estoque.lenght} titulos.');
        for (let livro of estoque){
            console.log('${livro.id}, ${livro.titulo}, ${livro.autor} ${livro.quantidade}');
        }
    }
}
listarLivros();

const executaEMostraLista = (acao, mostraLista) => {
    console.log('vou executar');
    acao();
    console.log('executei');
    mostraLista();
}

executaEMostraLista(() => adicionaLivro(3437, 'Sobreviveno no Inferno', 'Mano', 18))