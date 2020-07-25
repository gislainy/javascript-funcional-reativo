Array.prototype.meuFilter = function(fn) {
    const filters = []
    for(let i = 0; i < this.length; i++) {
        let isValid = fn(this[i], i, this)
        if(isValid) filters.push(this[i])
    }
    return filters
}
const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 }
]

const qtdemaiorQueZero = item => item.qtde > 0
const getNome = item => item.nome;
const qtdeMuitoGrande = item => item.qtde >= 1000;
console.log(carrinho.meuFilter(qtdemaiorQueZero))
console.log(carrinho.meuFilter(qtdemaiorQueZero).map(getNome))
console.log(carrinho.meuFilter(qtdeMuitoGrande).map(getNome))

