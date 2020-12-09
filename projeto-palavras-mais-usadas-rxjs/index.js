const path = require('path');
const { toArray, map, groupBy, mergeMap, reduce } = require('rxjs/operators');
const _ = require("lodash");
const fn = require('./functions');

const caminho = path.join(__dirname, "..", "dados", "legendas");
const simbolos = [
    ".", "?", "-", ",", "\"", "♪", "_", "<i>", "</i>", "\r", "[", "]", "(", ")", "!"
]

fn.lerDiretorio(caminho)
    .pipe(
        fn.elementosTerminadosCom('.srt'),
        fn.lerArquivo(),
        fn.separarPor('\n'),
        fn.removerSeVazio(),
        fn.removerSeIniciarComNumeros(),
        fn.removerSimboles(simbolos),
        fn.separarPor(" "),
        fn.removerSeVazio(),
        fn.removerSeIniciarComNumeros(),
        groupBy(el => el.toLowerCase()),
        mergeMap(grupo => grupo.pipe(toArray())),
        map(palavras => ({elementro: palavras[0], qtde: palavras.length})),
        toArray(),
        // fn.agruparElementos(),
        map(array => _.sortBy(array, el => -el.qtde))
    )
    .subscribe(console.log)

