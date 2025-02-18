function eDediaOuEDeNoite(hora) {
    let periodo = '';
    if (hora <= 18)
        periodo = 'É de dia';
    else
    periodo = 'É de noite';
    return periodo;
}

console.log(eDediaOuEDeNoite());
console.log(eDediaOuEDeNoite(12));
console.log(eDediaOuEDeNoite('dia'));
console.log(eDediaOuEDeNoite(21));
console.log("----------------------");

function eMaiordeIdade(idade) {
    if(idade >= 18)
    console.log('Maior de idade');
    else
    console.log('Menor de idade');
}

eMaiordeIdade(16);
console.log("----------------------");

function periodoDoDia(hora) {
    if (hora < 12)
        console.log('É de manhã');
    else if (hora >= 12 && hora <= 18)
        console.log('É de tarde');
    else
        console.log('É de noite');
}

periodoDoDia(2);
periodoDoDia(14);
periodoDoDia(20);
periodoDoDia(-30);
periodoDoDia(42);
console.log("----------------------");

function periodoComRegra(hora) {
    if (hora >= 0 && hora <= 24)
        periodoDoDia(hora);
    else
        console.log('Hora inválida');
}

periodoComRegra(3);
periodoComRegra(21);
periodoComRegra(17);
periodoDoDia(-30);
periodoDoDia(42);
console.log("----------------------");

function menuEscolha(opçaoDoMenu) {
    switch(opçaoDoMenu) {
        case 1:
            console.log('Você escolheu a primeira opção');
        break;
        case 2:
            console.log('Você escolheu a segunda opção');
        break;
        default:
            console.log('Opção inválida');
    }
}

menuEscolha(1);
menuEscolha(2);
menuEscolha('2');
menuEscolha(90);
console.log("----------------------");

function maiorDeIdadeSimples(idade) {
    let condicaoIdade = idade >+ 18 ? 'Maior de idade' : 'Menor de idade' //(: = se não) (? = entao)
    return condicaoIdade;
}

console.log(maiorDeIdadeSimples(18));
console.log(maiorDeIdadeSimples(3));
console.log("----------------------");

function maiorDeIdadeUnario(idade) {
    return idade >= 18 && 'Maior de idade'
}


console.log(maiorDeIdadeUnario(18));
console.log(maiorDeIdadeUnario(3));
console.log("----------------------");

function maiorDeIdadeCondicao(idade) {
    return idade >= 18 
}

console.log(maiorDeIdadeCondicao(18));
console.log(maiorDeIdadeCondicao(3));
console.log("----------------------");