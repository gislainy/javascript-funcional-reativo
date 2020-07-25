const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true }
]

// filter, map, reduce

// 1 fragil: true
// 2 total
// 3 media totais

const isFragil = item => item.fragil
const getTotal = item => item.qtde * item.preco
const somar = (a, b) => a + b;
const getMedia = (acc, el) => {
    let qtde = acc.qtde + 1;
    let total = acc.total + el;
    return {
        qtde,
        total,
        media: total / qtde
    };
};
let mediaInicial = {
    qtde: 0,
    total: 0,
    media: 0
};
let media = carrinho
    .filter(isFragil)
    .map(getTotal).reduce(getMedia, mediaInicial)
    .media
console.log(media)