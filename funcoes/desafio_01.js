
function somar (a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
function calcular (a) {
    return function (b) {
        return function (fn) {
            return typeof fn === "function" ? fn(a, b) : null;
        }
    }
}

function multiplicar (a, b) {
    return a * b;
}

function potencia (a, b) {
    return Math.pow(a, b);
}

let resultadoSomar3 = somar(3)(4)(5);
console.log(resultadoSomar3)

let resultadoMultiplicar = calcular(2)(3)(multiplicar);
let resultadoPotencia = calcular(2)(3)(potencia);

console.log(resultadoMultiplicar)
console.log(resultadoPotencia)


