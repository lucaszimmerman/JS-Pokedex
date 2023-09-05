
const offset = 0;
const limit = 10;
const url = 'https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}';

//Quando finalizar a requisição, ele irá retornar está função com a response
fetch(url).then(function (response) {
    console.log(response)
});

