const path = require('path')
const fs = require('fs')

const caminho = path.join(__dirname, 'dados.txt')

function readFile (caminho) {
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, (err, conteudo) => {
            if (err) return reject();
            resolve(conteudo.toString())
        })
    });
}

readFile(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(', '))
    .then(console.log)