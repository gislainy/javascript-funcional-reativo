function soma (a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

console.log(soma(1)(2)(3))

function textoComTamonhoEntre (min, max, erro, texto) {
    const tamanho = (texto || '').trim().length;
    if (tamanho < min || tamanho > max) {
        throw erro;
    }
}

const p1 = { nome: 'A', preco: 19.99, desc: 0.25 }

function textoComTamonhoEntreCurrying (min) {
    return (max) => {
        return (erro) => {
            return (texto) => {
                // Lazy Evaluation
                const tamanho = (texto || '').trim().length;
                if (tamanho < min || tamanho > max) {
                    throw erro;
                }
            }
        }
    }
}

function aplicarValidacao (fn) {
    return function (valor) {
        // Lazy Evaluation
        try {
            fn(valor)
        } catch (error) {
            return { error }
        }
    }
}

const forcarTamanhoPadrao = textoComTamonhoEntreCurrying(4)(255)
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome produto inválido!')
const validarNomeProduto = aplicarValidacao(forcarNomeProdutoValido)

console.log(validarNomeProduto(p1.nome))