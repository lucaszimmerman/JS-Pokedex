
const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())//vai transformar os detalhes em JSON
}

pokeApi.getPokemons = (offset = 0 , limit=10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

     return fetch(url)//Quando finalizar a requisição, ele irá retornar está função com a response
    .then((response) => response.json()) //Aqui ele recebe o response e transforma em json
    .then((jsonBody) => jsonBody.results) // Pegamos a lista de pokemons
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) // Transformamos esta lista de pokemons em uma lista de busca por detalhe
    .then((detailRequests) => Promise.all(detailRequests)) //Esperando todos terminarem
    .then((PokemonDetails) => PokemonDetails) //detalhe dos pokemons
    .catch((error) => console.error(error)) //Sempre que ocorrer um erro na requisição, o console mostrará uma mensagem de erro
}

