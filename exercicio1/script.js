const number = Number(prompt("Insira um número:"))

if (number % 2 === 0) {
    console.log("O número é divisível por 2.")
} else {
    console.log("O número não é divisível por 2.")
} if (number % 3 === 0) {
    console.log("O número é divisível por 3.")
} else {
    console.log("O número não é divisível por 3.")
}

if (number % 2 === 0 || number % 3 === 0) {
    console.log("O número é divisível por 2 ou 3.")
} else {
    console.log("O número não é divisível por 2 ou 3.")
}