
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToLi(pokemon) {
    return ` <li class="pokemon">
    <span class="number">#001</span> 
    <span class="name">${pokemon.name}</span> 
    <div class="detail">
       <ol class="types">
           <li class="type">Grass</li>
           <li class="type">Poison</li>
       </ol>
       <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
   </div>
</li>
    `
}

const pokemonList = document.getElementById('pokemonList')


//Quando finalizar a requisição, ele irá retornar está função com a response
fetch(url)
    .then((response) => response.json()) //Aqui ele recebe o response e transforma em json
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => { //Aqui será feita a conversão do HTML para o pokemon específico
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon)
            
        }
    })
    //Aqui ele irá mostrar o json
    .catch((error) => console.error(error)) //Sempre que ocorrer um erro na requisição, o console mostrará uma mensagem de erro
    // .finally(() => console.log('Requisição concluída'))//Sempre que a requisição finalizar, o console mostrará uma mensagem positiva de que a requisição foi concluída




