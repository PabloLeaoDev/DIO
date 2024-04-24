// JSON
let user = {
	name: 'Pablo',
    age: 18,
    nacionality: 'Brazilian',
    products: {
		0: ['PC Gamer', 3600],
        1: ['Monitor', 700],
        2: ['GPU', 1950],
        3: ['Cadeira Gamer', 1500]
    }
}

main(user);

// função main chama as outras funções
function main(user) {
    print(user)
    buy(user)
}

// função user imprime o nome, idade e nacionalidade
function print(user) {
	console.log(`O nome do comprador é ${user.name}.`);
    console.log(`Ele tem ${user.age} anos.`);
    console.log(`Ele nasceu no ${user.nacionality}.\n`);
    console.log(`Ele comprou os seguintes produtos:\n`);
}

// função buy imprime os nomes dos produtos e o preço dos mesmos
function buy(user) {
	for(let index in user.products) {
    	let [productsName, productsPrice] = user.products[index];
        console.log(`${productsName}: R$ ${productsPrice}.`);
	}
}