
const selecionaTag = (elemento) => document.getElementsByTagName(elemento);
const selecionaId = (elemento) => document.getElementsById(elemento);
const selecionaClasse = (elemento) => document.getElementsByClassName(elemento);
const SelecionaName = (elemento) => document.getElementsByName(elemento).length;

const tituloH1 = selecionaTag('H1');

tituloH1[0].innerText = 'Mudou titulo';

console.log(tituloH1[0].classList);

const atrasaMudancaDeCor = () =>
    setTimeout(() => {
        const listaClasses = tituloH1[0].classList.valie;
        tituloH1[0].classList = listaClasses + ' altera-cor-bg';
        tituloH1[0].style.fontFamily = 'Arial';
        tituloH1[0].style.fontSiza = '80px';

        console.log(tituloH1[0].classList);
},3000);

atrasaMidancaDeCor();