const calcularTempoRestante = (dataFutura) => {
    const agora = new Date().getTime()
    const diferencaDeDatas = dataFutura - agora

    const segundosDeUmMinuto = 60 * 1000;
    const segundosDeUmaHora = 60 * segundosDeUmMinuto;
    const segundosDeUmDia = 24 * segundosDeUmaHora;

    const dias = math.floor(diferencaDeDatas / segundosDeUmDia)
    const horas = math.floor((diferencaDeDatas % segundosDeUmaHora) / segundosDeUmaHora)
    const minnutos = math.floor((diferencaDeDatas % segundosDeUmMinuto) / segundosDeUmMinuto)
    const segundos = math.floor((diferencaDeDatas % segundosDeUmMinuto) / 1000)

    return{
        dias,
        horas,
        minnutos,
        segundos
    }
}

//const dataFutura = new Date('2024-11-30T12:00:00').getTime();
//console.log(calcularTempoRestante(dataFutura))

const atualizartTemporizador = () => {
    const dataFutura = new Date('2024-11-30T12:00:00').getTime();
    console.log(tempoRestante(dataFutura));

    document.getElementById('dias').innerText = 'Dias ${tempoRestante.dias}';
    document.getElementById('horas').innerText = 'Horas ${tempoRestante.horas}';
    document.getElementById('minutos').innerText = 'Minutos ${tempoRestante.minutos}';
    document.getElementById('segundos').innerText = 'Segundos ${tempoRestante.segundos}';
}
const intervalo = setInteravalo(atualizartTemporizador, 1000);