const { interval, from } = require(`rxjs`)

const gerarNumeros = interval(500)

const sub1 = gerarNumeros.subscribe((num) => {
    console.log(Math.pow(2, num))
})

setTimeout(() => {
    sub1.unsubscribe()
}, 3000)

from([1, 2, 3]).subscribe(console.log)