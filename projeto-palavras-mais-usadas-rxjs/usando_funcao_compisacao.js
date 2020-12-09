const path = require('path');
const fn = require('./functions');

const caminho = path.join(__dirname, "..", "dados", "legendas");
const simbolos = [
    ".", "?", "-", ",", "\"", "♪", "_", "<i>", "</i>", "\r", "[", "]", "(", ")", "!"
]

const palavrasMaisUsadas = fn.composicao(
    fn.lerDiretorio,
    fn.elementosTerminadosCom('.srt'),
    fn.lerArquivos,
    fn.mesclarElementos('\n'),
    fn.separarPor("\n"),
    fn.removerSeVazio,
    fn.removeSeIncluir('-->'),
    fn.removerSeApenasNumeros,
    fn.removerSimboles(simbolos),
    fn.mesclarElementos(' '),
    fn.separarPor(" "),
    fn.removerSeVazio,
    fn.removerSeApenasNumeros,
    fn.agruparElementos,
    fn.orderPorAtributoNumerico('qtde', 'desc')
)

palavrasMaisUsadas(caminho).then(console.log)

