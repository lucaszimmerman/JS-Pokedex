function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon) {
    return ` <li class="pokemon">
    <span class="number">#0${pokemon.order}</span> 
    <span class="name">${pokemon.name}</span> 
    <div class="detail">
       <ol class="types">
           ${convertPokemonTypesToLi(pokemon.types).join('')}
       </ol>
       <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
   </div>
</li>
    `
}

const pokemonList = document.getElementById('pokemonList')

   pokeApi.getPokemons().then((pokemons = []) => { //Aqui será feita a conversão do HTML para o pokemon específico
    const newHtml = pokemons.map(convertPokemonToLi).join('') //.join junta todos os elementos do array
    pokemonList.innerHTML = newHtml
    })





