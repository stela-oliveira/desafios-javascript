function numeroPrimo(num) {
    if (typeof num !== "number" || num < 2) {
        return "valor invalido detectado"
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }

    return true
}

console.log(numeroPrimo(7))
console.log(numeroPrimo(10))
console.log(numeroPrimo("xpto"))
