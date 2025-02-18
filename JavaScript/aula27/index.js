(() => {
    const botaoCarregar = document.getElementById('carrega=devs');
    const InputNome = document.getElementById('nome-dev');
    const botaoGuarda = document.getElementById('guarda');
    async function carregaDevs () {
        const devData = await fetch('https://api.github.com/users');
        const listaDevs = await devData.json();  
        return listaDevs;
    }

    async function carregaDevsPorUser (user) {
        const devData = await fetch('https://api.github.com/users/${user}');
        const dev = await devData.json();
        return dev;
    }

    function mostraListaDevs(listaDevs) {
        for(let dev of listaDevs) {
            const blocoDev = document.createElement('p');
            blocoDev.innerText = dev.login;
            document.body.appendChild(blocoDev);
        }
    }

    botaoCarregar.addEventListener('click', () => {
        carregaDevs().then((res) => mostraListaDevs(res));
    })

    InputNome.addEventListener('keyup', (e) => {
        localStorage.setItem('devProcurado', e.target.value);
    })

    botaoGuarda.addEventListener('click', () => {
        const devProcurado = localStorage.getItem('devProcurado');
        carregaDevsPorUser(devProcurado).then(res => localStorage.setItem('devProcurado', JSON.stringify(res)));

        const dadosAtuais = JSON.parse(localStorage.getItem('devProcurado'));
        console.log(dadosAtuais);
    })
})()