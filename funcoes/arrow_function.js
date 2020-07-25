// arrow function é uma funcção anonima

const felizNatal = () => console.log('Feliz Natal!!!')
felizNatal();

const saudacao = nome => `Fala ${nome}!!!`
console.log(saudacao("Maria"))

const somar = (...numeros) => {
    let soma = 0;
    for (let n of numeros) {
        soma += n;
    }
    return soma;
}
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

let potencia = base => exp => Math.pow(base, exp)

console.log(potencia(2)(3))


//this
Array.prototype.log = function () {
    console.log(this)
}
//this não funciona
Array.prototype.primeiro = () => {
    console.log(this[0])
}

const numeros = [1, 2, 3]
numeros.log();