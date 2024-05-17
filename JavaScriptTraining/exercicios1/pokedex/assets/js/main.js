const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const maxRecords = 151
const limit = 10
let offset = 0

// Arrow functions substituem a funções convencionais, pois essas funções serão chamadas somente no contexto da Promisse, então não se faz necessário nomená-las, tampouco criar o corpo da função convencional. 

function loadPokemons(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.id}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src=${pokemon.photo} alt="${pokemon.name}">
                </div>
            </li>
        `).join('')
    })
}

loadPokemons(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    let qtdRecords = offset + limit
    if(qtdRecords >= maxRecords) {
        newLimit = maxRecords - offset
        loadPokemons(offset, newLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemons(offset, limit)
    }
})