const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

function pokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>
        </li>

        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            <img src=${pokemon.photo} alt="${pokemon.name}">
        </div>
    `
}

// Arrow functions substituem a funções convencionais, pois essas funções serão chamadas somente no contexto da Promisse, então não se faz necessário nomená-las, tampouco criar o corpo da função convencional. 

function loadPokemons(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(pokemonToLi).join('')
    })
}