const botao = document.getElementById('botao');
const inputText = document.getElementById('texto');
const alertaOla = () => alert('Olá, estudante!');
botao.addEventListener('click', () => {
    const titulo = document.getElementById('titulo-principal');
    titulo.innerText = 'clicou para limpar titulo'
})

inputText.addEventListener('keypress', (e) => {
    const titulo = document.getElementsByTagName('h1')[0];
    titulo.innerText = e.target.value
})