
function convertPokemonToLi(pokemon) {
    return ` 
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
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => { //Aqui será feita a conversão do HTML para o pokemon específico
    const newHtml = pokemons.map(convertPokemonToLi).join('') //.join junta todos os elementos do array
    pokemonList.innerHTML = newHtml
    })





