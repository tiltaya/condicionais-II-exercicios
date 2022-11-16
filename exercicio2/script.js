const nacionalidade = prompt("Escreva aqui sua nacionalidade.").toLowerCase()

function pais () {

switch (nacionalidade) {
     case "brasileiro":
     case "brasileira":  
        console.log("A nacionalidade da pessoa é brasileira.")
          break
     case "argentino":
     case "argentina":  
        console.log("A nacionalidade da pessoa é argentina.")
            break     
    case "uruguaio":
    case "uruguaia":  
        console.log("A nacionalidade da pessoa é uruguaia.")
            break     
    case "chileno":
    case "chilena":  
        console.log("A nacionalidade da pessoa é chilena.")
            break     
    case "colombiano":
    case "colombiana":  
        console.log("A nacionalidade da pessoa é colombiana.")
            break
    default: console.log("Nacionalidade não encontrada.")
}
}

pais(nacionalidade)