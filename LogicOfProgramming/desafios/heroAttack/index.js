class hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack(atk) {
        console.log(`\nO ${this.type} ${this.name} de ${this.age} anos atacou usando ${atk}!`);
    }
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// recebe os dados do usuário
rl.question('\nDigite o nome do herói: ', (name) => {
  rl.question('Digite quanto de idade o herói possui: ', (age) => {
    rl.question('Digite o tipo do herói (mago, guerreiro, monge ou ninja): ', (heroType) => {
        // converte o tipo para maiúsculo
        const type = heroType.toUpperCase();
        // verifica o tipo e instancia hero adequadamente, chamando o o método attack em seguida
        if (type == 'MAGO') {
            let wizard = new hero(name , age, 'mago');
            wizard.attack('magia');
        } else if (type == 'GUERREIRO') {
            let warrior = new hero(name, age, 'guerreiro');
            warrior.attack('espada');
        } else if (type == 'MONGE') {
            let monk = new hero(name, age, 'monge');
            monk.attack('Ki');
        } else if (type == 'NINJA') {
            let ninja = new hero(name, age, 'ninja');
            ninja.attack('ninjutsu');
        } else {
            console.log('Tipo de herói inválido.');
        }
      rl.close();
    });
  });
});