
const fs = require('fs')
const path = require('path')

function lerDiretorio (caminho) {
    return new Promise((resolve, reject) => {
        try {
            let arquivos = fs.readdirSync(caminho).map(arquivo => path.join(caminho, arquivo))
            resolve(arquivos)
        } catch (error) {
            reject(error)
        }
    })
}

function lerArquivo (caminho) {
    return new Promise((resolve, reject) => {
        try {
            const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8' });
            resolve(conteudo.toString())
        } catch (error) {
            reject(error)
        }
    });
}

function lerArquivos (caminhos) {
    return Promise.all(caminhos.map(lerArquivo))
}

function elementosTerminadosCom (padraoTextual) {
    return function (array) {
        return array.filter(el => el.endsWith(padraoTextual))
    }
}

function removerSeVazio (array) {
    return array.filter(el => el.trim())
}

function removeSeIncluir (padraoTextual) {
    return function (array) {
        return array.filter(el => !el.includes(padraoTextual))
    }
}

function removerSeApenasNumeros (array) {
    return array.filter(el => {
        const num = parseInt(el.trim());
        return num !== num;
    })
}

function removerSimboles (simbolos) {
    return function (array) {
        return array.map(el => {
            return simbolos.reduce((acc, simbolo) => {
                return acc.split(simbolo).join("")
            }, el)
        })
    }
}

const mesclarElementos = simbolo => array => array.join(simbolo);

const separarPor = simbolo => array => array.split(simbolo);

function agruparElementos (palavaras) {
    return Object.values(palavaras.reduce((acc, palavra) => {
        const el = palavra.toLowerCase();
        const qtde = acc[el] ? acc[el].qtde + 1 : 1;
        acc[el] = { elemento: el, qtde }
        return acc
    }, {}))
}

function orderPorAtributoNumerico (attr, ordem = 'asc') {
    return function (array) {
        const asc = (o1, o2) => o1[attr] - o2[attr];
        const desc = (o1, o2) => o2[attr] - o1[attr];
        return array.sort(ordem === 'asc' ? asc : desc)
    }
}
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

module.exports = {
    lerDiretorio,
    elementosTerminadosCom,
    lerArquivos,
    lerArquivo,
    removerSeVazio,
    removeSeIncluir,
    removerSeApenasNumeros,
    removerSimboles,
    mesclarElementos,
    separarPor,
    agruparElementos,
    orderPorAtributoNumerico,
    composicao
}