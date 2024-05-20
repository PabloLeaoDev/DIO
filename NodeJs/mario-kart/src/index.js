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

const player1 = new Runner(4, 3, 3, 'Mario')
const player2 = new Runner(5, 2, 5, 'Bowser')


function round(index) {
    let block = Math.floor(Math.random() * 3)
    let run = ''
    while(true) {
        switch(block) {
        case 0:
            run = 'RETA'
            break
        case 1:
            run = 'CURVA'
            break
        case 2:
            // a condição abaixo impossibilita acontecer um confronto na primeira rodada
            if(index === 1) {
                block = Math.floor(Math.random() * 3)
                continue
            } else {
                run = 'CONFRONTO'
            } 
        }
        break
    }
    
    return run
}

function choiceHullBomb() {
    choice = Math.random()
    if(choice < 0.5)
        return 'Casco'
    else
        return 'Bomba'
}

(function main() {
    let cont1 = 0
    let cont2 = 0
    console.log(`🚨 Corrida entre ${player1.name} e ${player2.name} começando... \n`)
    for (let i = 1; i < 6; i++) {
        const block = round(i)
        const runnerNum1 = player1.track()
        const runnerNum2 = player2.track()
        const runner1 = player1.name
        const runner2 = player2.name
        let blc
        let vl
        console.log('-----------------------------------------------------------')
        console.log(`🏁 Rodada ${i}`)
        console.log('-----------------------------------------------------------')
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
            console.log(`${player1.name} confrontou com ${player2.name} 🥊`)
        }
        console.log(`${runner1} 🎲 rolou um dado de ${blc} ${runnerNum1} + ${player1[vl]} = ${runnerNum1 + player1[vl]}`)
        console.log(`${runner2} 🎲 rolou um dado de ${blc} ${runnerNum2} + ${player2[vl]} = ${runnerNum2 + player2[vl]}`)
        if ((runnerNum1 + player1[vl]) > (runnerNum2 + player2[vl])) {
            cont1 += 1
            if (block !== 'CONFRONTO') {
                console.log(`${player1.name} marcou 1 ponto!`)
            }
        } else if ((runnerNum1 + player1[vl]) < (runnerNum2 + player2[vl])) {
            cont2 += 1
            if (block !== 'CONFRONTO') {
                console.log(`${player2.name} marcou 1 ponto!`)
            }
        } else {
            console.log('Empatou!')
        }
        if (block === 'CONFRONTO') {
            let hullOrBomb = choiceHullBomb()
            if ((runnerNum1 + player1[vl]) > (runnerNum2 + player2[vl])) {
                console.log(`${player1.name} venceu o confronto com ${player2.name}!`)
                if(hullOrBomb === 'Casco') {
                    console.log(`${player1.name} atacou ${player2.name} com um ${hullOrBomb}!`)
                    console.log(`${player2.name} perdeu 1 ponto. 🐢`)
                    // Aqui, o vencedor perde o ponto que ele não deveria ter ganhado (saldo neutro) e o perdedor perde, simplesmente (saldo negativo)
                    cont1 -= 1
                    cont2 -= 1
                } else {
                    console.log(`${player1.name} atacou ${player2.name} com uma ${hullOrBomb}!`)
                    console.log(`${player2.name} perdeu 2 pontos. 💣`)
                    cont1 -= 1
                    cont2 -= 2
                }
                if (cont2 < 0) {
                    cont2 = 0
                }
            } else if ((runnerNum1 + player1[vl]) < (runnerNum2 + player2[vl])) {
                console.log(`${player2.name} venceu o confronto com ${player1.name}!`)
                if(hullOrBomb === 'Casco') {
                    console.log(`${player2.name} atacou ${player1.name} com um ${hullOrBomb}!`)
                    console.log(`${player1.name} perdeu 1 ponto. 🐢`)
                    cont2 -= 1
                    cont1 -= 1
                } else {
                    console.log(`${player2.name} atacou ${player1.name} com uma ${hullOrBomb}!`)
                    console.log(`${player1.name} perdeu 2 pontos. 💣`)
                    cont2 -= 1
                    cont1 -= 2
                }
                if (cont1 < 0) {
                    cont1 = 0
                }
            } else {
                console.log('Ninguém venceu o contronto, foi um empate!')
            }
        }
    }
    console.log('-----------------------------------------------------------')
    if (cont1 > cont2) {
        console.log(`🏆 ${player1.name} venceu a disputa com ${player2.name}!`)
    } else if (cont1 < cont2) {
        console.log(`🏆 ${player2.name} venceu a disputa com ${player1.name}!`)
    } else {
        console.log(`A disputa foi um empate! ⚖`)
    }
})()