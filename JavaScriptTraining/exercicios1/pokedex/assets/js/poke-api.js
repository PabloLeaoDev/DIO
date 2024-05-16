const pokeApi = {}

function instantiatePokemon(pokeDetail) {
    const poke = new Pokemon()
    poke.name = pokeDetail.name
    poke.order = pokeDetail.order
    const types = pokeDetail.types.map((typesSlot) => typesSlot.type.name)
    const [type] = types
    poke.types = types
    poke.type = type
    poke.photo = pokeDetail.sprites.other.dream_world.front_default

    return poke
}

pokeApi.getPokemonDetails = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json()).then(instantiatePokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetails))
        .then((detailsRequests) => Promise.all(detailsRequests))
        .then((pokemonRequests) => pokemonRequests)
        .catch((error) => console.error(error))
}

loadMoreButton.addEventListener('click', () => {
    loadPokemons()
})