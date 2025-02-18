let meuNome = 'João';
console.log(meuNome);

meuNome = 'Kurt';
console.log(meuNome);

function exibeNome() {
    let meuNome = 'João';
    console.log(meuNome);
}
exibeNome();

const minhaPrimeiraArrowFunction = () => {
    console.log('executei arrow function');
};

const exibeNomeArrow = () => {
    let meuNome = 'Kurt Arrow function';
    console.log(meuNome);
};

minhaPrimeiraArrowFunction();

exibeNomeArrow();
exibeNomeArrow();
exibeNomeArrow();