function somaArray(array) {
    if (array.some(function (numero) { return typeof numero !== "number" })) {
        return "valor invalido detectado"
    }

    let soma = array.reduce(function (acumulador, numero) {
        return acumulador + numero
    }, 0)

    return "A soma dos números é " + soma
}

console.log(somaArray([1, 2, 3, 4, 5]))
console.log(somaArray([-1, 10, 20]))
console.log(somaArray([45, 5, "xpto"]))
