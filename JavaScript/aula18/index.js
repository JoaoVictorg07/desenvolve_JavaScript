const verificaSeExisteElemento = (seletor) => {
    const elemento = document.querySelector(seletor);
    return !!elemento 
}

const contaElementosPorSeletor = (seletor) => {
    if(verificaSeExisteElemento(seletor)) {
        const todosOsElementos = document.querySelector(seletor);
        console.log('Existem ${todosOsElementos.lenght} elementos com o seletor');
    }else{
        console.log('Não existem elementos com o seletor ${seletor}');
    }

}

contaElementosPorSeletor('li.menu-item')
contaElementosPorSeletor('li.menu-items')


const elementoEspecifico = document.querySelectorAll('li')[1]
console.log(elementoEspecifico)