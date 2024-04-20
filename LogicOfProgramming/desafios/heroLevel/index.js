const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let hero = [];

rl.question('Digite o nome do herói: ', (name) => {
  hero.push(name);
  rl.question('Digite quanto de experiência o herói possui: ', (xp) => {
    hero.push(xp);
    let convertXP = Number(hero[1]);

    switch (true) {
      case convertXP <= 1000:
        console.log(`O Herói de nome ${hero[0]} está no nível Ferro.`);
        break;
      case convertXP > 1000 && convertXP <= 5000 :
        console.log(`O Herói de nome ${hero[0]} está no nível Bronze.`);
        break;
      case convertXP > 5000 && convertXP <= 6000:
        console.log(`O Herói de nome ${hero[0]} está no nível Prata.`);
        break;
      case convertXP > 6000 && convertXP <= 7000:
        console.log(`O Herói de nome ${hero[0]} está no nível Ouro.`);
        break;
      case convertXP > 7000 && convertXP <= 8000:
        console.log(`O Herói de nome ${hero[0]} está no nível Platina.`);
        break;
      case convertXP > 8000 && convertXP <= 9000:
        console.log(`O Herói de nome ${hero[0]} está no nível Ascendente.`);
        break;
      case convertXP > 9000 && convertXP <= 10000:
        console.log(`O Herói de nome ${hero[0]} está no nível Imortal.`);
        break;
      case convertXP > 10000: // maior que 10000
        console.log(`\nO Herói de nome ${hero[0]} está no nível Radiante.`);
        break;
    }
    rl.close();
  });
});