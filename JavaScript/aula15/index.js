function chamar(segundosDeAtraso) {
    console.log('Atrasou ${segundosDeAtraso} segundos.');
}
function chamaAtrasado(funcaoDeAtraso, quatidadeDeAtraso) {
    setTimeout(() => funcaoDeAtraso(quatidadeDeAtraso), quatidadeDeAtraso * 1000);
}

chamaAtrasado(chamar, 1);

function chamarComIntervalo(funcaoDeIntervalo, intervalo) {
    setInterval(() => funcaoDeIntervalo(intervalo), intervalo * 1000);
}
chamarComIntervalo(chamr, 2)