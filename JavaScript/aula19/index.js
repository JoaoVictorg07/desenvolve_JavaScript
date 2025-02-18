const elemento = document.getElementsByTagName('span');
console.log(elemento);

const elementoPorId = document.getElementById('titulo-principal');
console.log(elementoPorId.inertText)

const elementosPorClasse = document.getElementsByClassName('paragrafo');
console.log(elementosPorClasse[0].innerText);

const elementoPorNome = document.getElementsByName('botao')
console.log(elementoPorNome[0].inertText);

const verificaSeExisteTag = (elemento) => document.getElementsByTagName(elemento).length > 0
const verificaSeExisteId = (elemento) => document.getElementsById(elemento)
const verificaSeExisteClasse = (elemento) => document.getElementsByClassName(elemento).length > 0
const verificaSeExisteName = (elemento) => document.getElementsByName(elemento).length > 0

const listaDeElementos = ['header', 'ul', 'botao', 'titulo-principal', 'jorge']

const descobretTipoDoElemento = (lista) => {
    if(listaDeElementos.length === 0) {
        console.log('você não passou uma lista de elementos.')
    }else{
        for(let nome of lista){
            if(verificaSeExisteTag(nome))
                console.log('${nome} é uma tag')
            else if(verificaSeExisteId(nome))
                console.log('${nome} é uma id')
            else if(verificaSeExisteClasse(nome))
                console.log('${nome} é uma classe')
            else if(verificaSeExisteName(nome))
                console.log('${nome} é uma nome')
            else
                console.log('${nome} não está no DOM')
        }
    }
}

descobretTipoDoElemento(listaDeElementos)