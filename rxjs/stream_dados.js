function gerarNumeros (fn) {
    return {
        iniciar (fn, temp = 1000) {
            let num = 0;
            const i = setInterval(() => {
                fn(num++)
            }, temp)

            return {
                parar () {
                    clearInterval(i)
                }
            }
        }
    }
}
const temp1 = gerarNumeros()
const exec1 = temp1.iniciar(numero => {
    console.log(`#1`, numero * 2)
}, 1000)

const temp2 = gerarNumeros()
const exec2 = temp2.iniciar(numero => {
    console.log(`#2`, numero + 100)
}, 2000)

setTimeout(() => {
    exec1.parar()
    exec2.parar()
}, 10000)


function gerarElementos (array) {
    return {
        iniciar (fn) {
            let indice = 0;
            const i = setInterval(() => {
                if (indice >= array.length) {
                    clearInterval(i)
                } else {
                    fn(array[indice])
                    indice++
                }
            }, 1000)
            
            return {
                parar () {
                    clearInterval(i)
                }
            }
        }
    }
}
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let temp3 = gerarElementos(numeros);
temp3.iniciar(num => {
    console.log(Math.pow(2, num))
})