(() => {
    const botaoAceitar = document.getElementById('botao');
    const botaoRecusar = document.getElementById('esquecer');

    function chamaPromise(numeroEnviado) {
        const corrridaDeApp = new Promise((resolve, reject) => {
            if(numeroEnviado % 2 === 0)
                resolve('Deu bom');
            else
                reject('Deu ruim');
        })

        return corrridaDeApp;
    }

    botaoAceitar.addEventListener('click', () => {
        chamaPromise(2).then((res) => console.log(res))
    })

    botaoRecusar.addEventListener('click', () => {
        chamaPromise(1)
    })

})()