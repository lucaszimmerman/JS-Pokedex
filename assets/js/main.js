const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 30
let offset = 0

function loadPokemonItems(offset, limit) {
        pokeApi.getPokemons(offset, limit).then((pokemons = []) => { //Aqui será feita a conversão do HTML para o pokemon específico
        const newHtml = pokemons.map((pokemon) => ` 
        <li class="pokemon ${pokemon.type}">
        <span class="number">#0${pokemon.number}</span> 
        <span class="name">${pokemon.name}</span> 
        <div class="detail">
           <ol class="types">
               ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
           </ol>
           <img src="${pokemon.photo}" 
           alt="${pokemon.name}">
       </div>
    </li>
    `
        ).join('') //.join junta todos os elementos do array
    pokemonList.innerHTML += newHtml
    })
}

loadPokemonItems(offset, limit)//Aqui ele já faz o upload dos 30 pokemons iniciais

loadMoreButton.addEventListener('click', () => { //aqui,ao clicar, mais 30 pokemons aparecem
    offset += limit
    loadPokemonItems(offset, limit)
})


