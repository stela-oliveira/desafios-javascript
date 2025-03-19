function jogar(usuarioEscolha) {
    if (typeof usuarioEscolha !== "string")
        return "Escolha inválida"

    usuarioEscolha = usuarioEscolha.toLowerCase()
    let opcoes = ["pedra", "papel", "tesoura"]
    if (!opcoes.includes(usuarioEscolha))
        return "Escolha inválida"

    let cpuEscolha = opcoes[Math.floor(Math.random() * 3)]

    console.log(`O cpu escolheu: ${cpuEscolha}`)

    if (usuarioEscolha === cpuEscolha) return "Empate"
    if (
        (usuarioEscolha === "pedra" && cpuEscolha === "tesoura") ||
        (usuarioEscolha === "tesoura" && cpuEscolha === "papel") ||
        (usuarioEscolha === "papel" && cpuEscolha === "pedra")
    ) return "Você ganhou!"

    return "Você perdeu!"
}

console.log(jogar("Pedra"))
console.log(jogar("papel"))
console.log(jogar("tesoura"))
console.log(jogar("xpto"))
console.log(jogar(123))
