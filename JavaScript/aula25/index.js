const botao = document.getElementById('botao');
const inputText = document.getElementById('texto');
const botaoEsquecer = document.getElementById('esquecer');

botao.addEventListener('click', () => {
    const nomeSalvo = JSON.stringify(titulo.innerText);
    localStorage.setItem('dadosUsuario', nomeSalvo);
    document.body.appendChild(titulo);
})

inputText.addEventListener('keyup', (e) => {
    titulo.innerText = e.target.value
})

/*addEventListener('load', () => {
    const meuNome = JSON.parse(localStorage.getItem('dadosUsuario'));

    if(meuNome){
        titulo.innerText = 'Eu lembro de você ${meuNome}';
    } else {
        titulo.innerText = 'Desculpe, eu não lembro de você';
    }
    document.body.appendChild(titulo);
})*/

const frutas = ['Maçã', 'Laranja', 'Melancia','Maçã', 'Laranja', 'Melancia','Maçã', 'Laranja', 'Melancia','Maçã', 'Laranja', 'Melancia','Maçã', 'Laranja', 'Melancia','Maçã', 'Laranja', 'Melancia']

for(let fruta = 0; fruta < frutas.length; fruta++){
    localStorage.setItem('Fruta ${parseInt(fruta)}', frutas[fruta])
}

for(let fruta = 0; fruta < frutas.length; fruta++){
    console.log(sessionStorage.getItem('Fruta ${parseInt(fruta)}'))
}

botaoEsquecer.addEventListener('click', () => localStorage.clear())

localStorage.setItem('Fruta 15', 'Mudei o valor da fruta')