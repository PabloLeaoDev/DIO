var runner = 1

class Runner {
    constructor (speed, maneuver, power, name = `Runner${runner}`) {
        this.name = name,
        this.speed = speed,
        this.maneuver = maneuver,
        this.power = power
        runner += 1
    }

    track() {
        let drawnNum = Math.floor(Math.random() * 7)
        return drawnNum
    }
}

const mario = new Runner(4, 3, 3, 'Mario')
const peach = new Runner(3, 4, 2, 'Peach')
const yoshi = new Runner(2, 4, 3, 'Yoshi')
const bowser = new Runner(5, 2, 5, 'Bowser')
const luigi = new Runner(3, 4, 4, 'Luigi')
const donkey = new Runner(2, 2, 5, 'Donkey Kong')


function round() {
    let block = Math.floor(Math.random() * 3)
    let run = ''
    if (block === 0) {
        run = 'RETA'
    } else if (block === 1) {
        run = 'CURVA'
    } else {
        run = 'CONFRONTO'
    }

    return run
}

let cont1 = 0
let cont2 = 0

for (let i = 1; i < 6; i++) {
    console.log(`Rodada ${i}`)
    const block = round()
    const runnerNum1 = mario.track()
    const runnerNum2 = bowser.track()
    const runner1 = mario.name
    const runner2 = bowser.name
    let blc
    let vl
    console.log(`Bloco: ${block}`)
    if (block === 'RETA') {
        blc = 'velocidade'
        vl = 'speed'
    } else if (block === 'CURVA') {
        blc = 'manobrabilidade'
        vl = 'maneuver'
    } else {
        blc = 'poder'
        vl = 'power'
        console.log(`${mario.name} confrontou com ${bowser.name}`)
    }
    console.log(`${runner1} rolou um dado de ${blc} ${runnerNum1} + ${mario[vl]} = ${runnerNum1 + mario[vl]}`)
    console.log(`${runner2} rolou um dado de ${blc} ${runnerNum2} + ${bowser[vl]} = ${runnerNum2 + bowser[vl]}`)
    if ((runnerNum1 + mario[vl]) > (runnerNum2 + bowser[vl])) {
        cont1 += 1
    } else if ((runnerNum1 + mario[vl]) < (runnerNum2 + bowser[vl])) {
        cont2 += 1
    }
    if (block === 'CONFRONTO') {
        if ((runnerNum1 + mario[vl]) > (runnerNum2 + bowser[vl])) {
            console.log(`${mario.name} venceu o confronto com ${bowser.name}! ${bowser.name} perdeu 1 ponto.`)
            // Aqui, o vencedor perde o ponto que ele não deveria ter ganhado (saldo neutro) e o perdedor perde, simplesmente (saldo negativo)
            cont1 -= 1
            cont2 -= 1
            if (cont2 < 0) {
                cont2 = 0
            }
        } else if ((runnerNum1 + mario[vl]) < (runnerNum2 + bowser[vl])) {
            console.log(`${bowser.name} venceu o confronto com ${mario.name}! ${mario.name} perdeu 1 ponto.`)
            cont1 -= 1
            cont2 -= 1
            if (cont1 < 0) {
                cont1 = 0
            }
        } else {
            console.log('Ninguém venceu o contronto, foi um empate!')
        }
    }
}

if (cont1 > cont2) {
    console.log(`${mario.name} venceu a disputa com ${bowser.name}!`)
} else if (cont1 < cont2) {
    console.log(`${bowser.name} venceu a disputa com ${mario.name}!`)
} else {
    console.log(`A disputa foi um empate!`)
}