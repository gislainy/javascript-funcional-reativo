const esperarPor = (tempo = 100) => new Promise(resolve => setTimeout(resolve, tempo));

esperarPor()
    .then(() => console.log('Executando promise 1...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 2...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 3...'))

const retornarValor = () => new Promise(resolve => setTimeout(resolve(10), 500))
async function executar () {
    let valor = await retornarValor();
    await esperarPor();
    console.log(`Async/Await ${valor + 1}...`)
    await esperarPor();
    console.log(`Async/Await ${valor + 2}...`)
    await esperarPor();
    console.log(`Async/Await ${valor + 3}...`)
    await esperarPor();
    console.log(`Async/Await ${valor + 4}...`)

    return 10 + 5
}

executar().then(console.log);

function gerarNumerosEntre (min, max, numerosProibidos) {
    if (min > max) {
        [max, min] = [min, max]
    }
    return new Promise((resolve, reject) => {
        const fator = (max - min + 1);
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)) {
            reject('Numero repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena (qtdeNumeros, tentativas = 1) {
    try {
        const numeros = []
        for (let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros;
    } catch (error) {

        if(tentativas > 100) {
            throw "Não deu certo!"
        } else {
            return gerarMegaSena(qtdeNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(6)
    .then(console.log)
    .catch(console.log)