const path = require('path');
const fn = require('./functions');

const caminho = path.join(__dirname, "..", "dados", "legendas");
const simbolos = [
    ".", "?", "-", ",", "\"", "♪", "_", "<i>", "</i>", "\r", "[", "]", "(", ")", "!"
]


fn
    .lerDiretorio(caminho)
    .then(fn.elementosTerminadosCom('.srt'))
    .then(fn.lerArquivos)
    .then(fn.mesclarElementos('\n'))
    .then(fn.separarPor("\n"))
    .then(fn.removerSeVazio)
    .then(fn.removeSeIncluir('-->'))
    .then(fn.removerSeApenasNumeros)
    .then(fn.removerSimboles(simbolos))
    .then(fn.mesclarElementos(' '))
    .then(fn.separarPor(" "))
    .then(fn.removerSeVazio)
    .then(fn.removerSeApenasNumeros)
    .then(fn.agruparElementos)
    .then(fn.orderPorAtributoNumerico('qtde', 'desc'))
    .then(console.log)

