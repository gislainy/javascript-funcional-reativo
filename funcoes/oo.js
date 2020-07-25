
// Função Construtora
function ProdutoFn (nome, preco, desc = 0.15) {
    this.nome = nome;
    this.preco = preco
    this._desc = desc

    this.precoFinal = () => {
        return this.preco * (1 - this._desc)
    }

}
ProdutoFn.prototype.log = function () {
    console.log(`NOme ${this.nome} - Preço: R$ ${this.precoFinal()}`)
}

Object.defineProperty(ProdutoFn.prototype, 'desc', {
    get: function () {
        return this._desc
    },
    set: function (novoDesc) {
        if (novoDesc >= 0 && novoDesc <= 0) {
            this._desc = novoDesc;
        }
    }
})
Object.defineProperty(ProdutoFn.prototype, 'descString', {
    get: function () {
        return `${this._desc * 100}% de descibti`
    }
})

const p1 = new ProdutoFn('Caneta', 8.59)
console.log(p1.nome)
console.log(p1.precoFinal())
const p2 = new ProdutoFn('Geladeira', 2345.98)
console.log(p2.nome)
console.log(p2.precoFinal())
p2.log()
p2.desc = 3
console.log(p2.desc)
console.log(p2.descString)

class ProdutoClass {
    constructor(nome, preco, desc = .15) {
        this.nome = nome;
        this.preco = preco;
        this.desc = desc;
    }

    get nome () {
        return `Produto: ${this._nome}`
    }

    set nome (nome) {
        this._nome = nome.toUpperCase()
    }

    get precoFinal () {
        return this.preco * (1 - this.desc)
    }
}


const p3 = new ProdutoClass('Caneta', 8.59)
console.log(p3.nome)
console.log(p3.precoFinal)
const p4 = new ProdutoClass('Geladeira', 2345.98)
console.log(p4.nome)
console.log(p4.precoFinal)