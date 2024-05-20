// conceito de closures
// o JS armazena o contexto anterior o trata o "x" como uma espécie constante

function soma(x) {
    return (y) => {
        return x + y
    }
}

let somaParcial = soma(30)
console.log(somaParcial(20))
console.log(somaParcial(30))
console.log(somaParcial(40))