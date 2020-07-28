function composicao (...fns) {
    return function (valor) {
        return fns.reduce(async (acc, fn) => {
            if(Promise.resolve(acc) === acc) {
                return fn(await acc)
            } else {
                return fn(acc)
            }
        }, valor)
    }
}

const gritar = (texto) => texto.toUpperCase()
const enfatizar = (texto) => `${texto}!!!!`
const tornarLento = (texto) => new Promise(resolve => setTimeout(() => resolve(texto.split('').join(' ')), 2000))

const exagerado = composicao(gritar, enfatizar, tornarLento)
exagerado('PARA').then(console.log)
exagerado('Cuidado com o buraco').then(console.log)