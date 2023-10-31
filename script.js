document.getElementById("search").addEventListener("click", () => {
  displayPokemon();
});

async function displayPokemon() {
  const pokemonName = document.getElementById("pokémon-name").value;
  const pokemon = await getPokemon(pokemonName);
  addPokemonUI(pokemon);
}

async function getPokemon(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  console.log(response);
  return await response.json();
}

function addPokemonUI(pokemon) {
  const pokemonList = document.getElementById("pokémon-container");
  const element = document.createElement("div");
  element.innerHTML = `
    <strong>ID: </strong> ${pokemon.id}
    <strong>Name: </strong> ${pokemon.name}
    <strong>Base xp: </strong> ${pokemon.base_experience}
    <strong>First ability: </strong> ${pokemon.abilities[0].ability.name}
  `;
  pokemonList.appendChild(element);
}
