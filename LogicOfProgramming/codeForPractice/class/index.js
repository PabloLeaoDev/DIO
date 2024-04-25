class formaBolo {
    // o construtor recebe os valores de saborBolo e saborRecheio, criando um odjeto
	constructor (saborBolo, saborRecheio) {
    	this.saborBolo = saborBolo;
        this.saborRecheio = saborRecheio;
    }
    
    escrever() {
    	console.log(`Um delicioso bolo de ${this.saborBolo} com recheio de ${this.saborRecheio}!`)
    }
}

// instanciando (ou criando) um objeto de formaBolo, chamado bolo
let bolo = new formaBolo('limão', 'musse de limão')
console.log(bolo)
bolo.escrever()