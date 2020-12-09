
const fs = require('fs')
const path = require('path')
const { Observable } = require('rxjs')

function createPipeableOperator (operatorFn) {
    return function (source) {
        return Observable.create(subscriber => {
            const sub = operatorFn(subscriber);
            source.subscribe({
                next: sub.next,
                error: sub.error || (e => subscriber.error(e)),
                complete: sub.complete || (() => subscriber.complete())
            });
        });
    }
}

function lerDiretorio (caminho) {
    return new Observable(subscriber => {
        try {
            fs.readdirSync(caminho).forEach(arquivo => {
                subscriber.next(path.join(caminho, arquivo))
            })
            subscriber.complete()
        } catch (error) {
            subscriber.error(error)
        }
    })
}

function lerArquivo () {
    return createPipeableOperator(subscriber => ({
        next(caminho) {
            try {
                const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8' });
                subscriber.next(conteudo);
            } catch (error) {
                subscriber.complete();
            }
        }
    }));
}


function elementosTerminadosCom(padraoTextual) {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            if (texto.endsWith(padraoTextual)) {
                subscriber.next(texto);
            }
        }
    }))
}

function removerSeVazio() {
    return createPipeableOperator(subscriber => ({
        next(linha) {
            if (linha.trim()) {
                subscriber.next(linha)
            }
        }
    }))
}

function removerSeIniciarComNumeros() {
    return createPipeableOperator(subscriber => ({
        next(linha) {
            const num = parseInt(linha.trim());
            if (num !== num) {
                subscriber.next(linha);
            }
        }
    }))
}
function removerSimboles(simbolos) {
    return createPipeableOperator(subscriber => ({
        next(linha) {
            const textoSemSimbolo =  simbolos.reduce((acc, simbolo) => {
                return acc.split(simbolo).join("")
            }, linha)
            subscriber.next(textoSemSimbolo);
        }
    }))
}



function separarPor (simbolo) {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            texto.split(simbolo).forEach(parte => {
                subscriber.next(parte);
            });
        }
    }))
}
function agruparElementos () {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            const agrupado = Object.values(texto.reduce((acc, palavra) => {
                const el = palavra.toLowerCase();
                const qtde = acc[el] ? acc[el].qtde + 1 : 1;
                acc[el] = { elemento: el, qtde }
                return acc
            }, {}))
            subscriber.next(agrupado);
        }
    }))
}

module.exports = {
    lerDiretorio,
    elementosTerminadosCom,
    lerArquivo,
    removerSeVazio,
    removerSeIniciarComNumeros,
    removerSimboles,
    separarPor,
    agruparElementos
}