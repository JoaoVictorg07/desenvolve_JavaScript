const cores = ['preto', 'branco']
/* console.log(cores)
console.log(cores[0])
console.log(cores[1])
console.log('Quantidade de elementos', cores.length)
console.log(cores.indexOf('preto'))
console.log(cores.indexOf('branco'))
console.log(cores.indexOf('vermelho')) */
cores.push('vermelho')
console.log(cores) 
console.log(cores.length)
console.log(cores.indexOf('vermelho'))
console.log(cores.indexOf('verde'))
cores.push('verde')
console.log(cores)
console.log(cores.length)
cores.shift()
console.log(cores)
cores.unshift('preto')
console.log(cores)
cores.pop()
console.log(cores)

function removeCor(nomeDaCor) {
    const pocicaoDaCor = cores.includes(nomeDaCor)
    if(pocicaoDaCor >= 0){
        cores.splice(pocicaoDaCor, 1)
    }
    console.log(cores)
}

removeCor('branco')
removeCor('vermelho')
removeCor('vermelho')