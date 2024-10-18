fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then(response => response.json()) // promising me that the responsd is a json
.then(data => console.log(data.id))  // logging the data to the console.
.catch(error => console.error(error)) // catching any errors and logging them to the console.

