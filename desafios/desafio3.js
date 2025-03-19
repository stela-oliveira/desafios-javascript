function Palindromo(texto) {
    if (typeof texto !== "string")
        return "valor inválido detectado"

    let textoFormatado = texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\s]/g, "")

    let textoSemEspacos = ""
    for (let i = 0; i < textoFormatado.length; i++) {
        if (textoFormatado[i] !== " ") {
            textoSemEspacos += textoFormatado[i]
        }
    }

    let tamanhoTexto = textoSemEspacos.length
    for (let i = 0; i < tamanhoTexto / 2; i++) {
        if (textoSemEspacos[i] !== textoSemEspacos[tamanhoTexto - 1 - i]) {
            return false
        }
    }

    return true
}

console.log(Palindromo("arara"))
console.log(Palindromo("A base do teto desaba"))
console.log(Palindromo("xpto"))
console.log(Palindromo(123))
console.log(Palindromo("Socorram-me, subi no ônibus em Marrocos"))
console.log(Palindromo("Socorram-me, subi no ônibus em Marrocos1"))
console.log(Palindromo("A man, a plan, a canal: Panama!"))
