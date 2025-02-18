const fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34]

for(let i = 0; i < fibonacci.length; i++){
    console.log(i+1, 'o item', fibonacci[i]);
}

function interaSobreArray() {
    for(let i = 0; i < fibonacci.length; i++){
        console.log(i+1, 'o item', fibonacci[i]);
    }
}
interaSobreArray();
console.log('-----------------------');

function contaAte(numero) {
    for(let i = 1; i <= numero; i++) {
        console.log('Mariana conta', i);
    }
}

contaAte(10);

function verificaItemNoArray(listaDeNumeros){
    for(let item of listaDeNumeros){
        console.log(item);
    }
}

verificaItemNoArray();

function verificaItemPorIndice(listaDeNumeros){
    for(let indice in listaDeNumeros){
        console.log(listaDeNumeros[indice]);     
    }
}
verificaItemPorIndice(fibonacci);


function contaPeloMenosUmAte(){
    let numero = 0;
    do {
        console.log(numero);
        numero++;
    }while(numero <= numeroLimite)
}

contaPeloMenosUmAte(1);
contaPeloMenosUmAte(0);

function verificaSePodeAte(numeroLimite){
    let numero = 0;
    while(numero <= numeroLimite){
        console.log(numero);
        numero++;
    }
}

verificaSePodeAte(1);
verificaSePodeAte(0);