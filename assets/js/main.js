
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

//Quando finalizar a requisição, ele irá retornar está função com a response
fetch(url)
    .then((response) => response.json()) //Aqui ele recebe o response e transforma em json
    .then((jsonBody) =>console.log(jsonBody)) //Aqui ele irá mostrar o json
    .catch((error) => console.error(error)) //Sempre que ocorrer um erro na requisição, o console mostrará uma mensagem de erro
    // .finally(() => console.log('Requisição concluída'))//Sempre que a requisição finalizar, o console mostrará uma mensagem positiva de que a requisição foi concluída




