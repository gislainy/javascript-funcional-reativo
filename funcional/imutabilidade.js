

function ordenar (array) {
    return [...array].sort((a, b) => a - b)
}
const nums = Object.freeze([3, 1, 7, 9, 4, 6])
const numbsOrdenado = ordenar(nums)
console.log(nums, numbsOrdenado)