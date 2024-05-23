class Pokemon {
    constructor() {
        this.name = '',
        this.id = 0,
        this.types = [],
        this.type = '',
        this.photo = ''
    }
}

async function getPokemons(offset = 0, limit = 10) {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    try {
        const response = await fetch(url)
        const pokeDetail = await response.json()
        const pokemons = pokeDetail.results
        const detailsRequests = pokemons.map(getPokemonDetails)
        return Promise.all(detailsRequests)
    } catch (error) {
        console.error(error)
        return []
    }
}

async function getPokemonDetails(pokemon) {
    try {
        const response = await fetch(pokemon.url)
        const jsonBody = await response.json()
        return instantiatePokemon(jsonBody)
    } catch (error) {
        console.error(error)
        return null
    }
}

async function instantiatePokemon(pokeDetail) {
    const poke = new Pokemon()
    poke.name = pokeDetail.name
    poke.id = pokeDetail.id
    const types = pokeDetail.types.map((typesSlot) => typesSlot.type.name)
    const [type] = types
    poke.types = types
    poke.type = type
    poke.photo = pokeDetail.sprites.other.dream_world.front_default

    return poke
}