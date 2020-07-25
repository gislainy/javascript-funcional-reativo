const primeiroElemento = arrayOrString => arrayOrString[0];
const toLowerCase = string => string.toLowerCase();
new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'Carlos'])
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(toLowerCase)
    .then(console.log)



setTimeout(function () {
    console.log('Executando callback 1...')
    setTimeout(function () {
        console.log('Executando callback 2...')
    }, 100)
}, 100)

const esperarPor = (tempo = 100) => new Promise(resolve => setTimeout(resolve, tempo));

esperarPor(100).then(esperarPor).then(_ => console.log('Terminou'))


function gerarNumerosEntre (min, max, tempo) {
    if (min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        setTimeout(function () {
            const fator = (max - min + 1);
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}
gerarNumerosEntre(1, 60)
    .then(num => num * 10)
    .then(num => `O numero gerado foi ${num}`)
    .then(console.log)

function gerarVariosNumeros () {
    return Promise.all([
        gerarNumerosEntre(1, 60, 200),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 300),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 150)
    ])
}
console.time('promise')
gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeEnd('promise')
    })

function funcionarOuNao(valor, chanceError) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceError) {
            reject('Ocorreu um erro')
        } else {
            resolve(valor)
        }
    });
}
funcionarOuNao('Testando', 0.9)
    .then(console.log)
    .catch(console.error)
