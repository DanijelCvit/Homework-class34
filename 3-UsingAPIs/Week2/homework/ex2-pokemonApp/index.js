'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return response.json();
    } else {
      throw 'HTTP ERROR';
    }
  } catch (error) {
    console.log(error);
  }
}

async function fetchAndPopulatePokemons(pokemonGeneration) {
  const url = `https://pokeapi.co/api/v2/generation/${pokemonGeneration}/`;
  const defaultSelect = document.createElement('option');
  const pokemonSelect = document.getElementById('pokemon');

  defaultSelect.value = '';
  defaultSelect.textContent = '--Pease choose an option--';

  pokemonSelect.append(defaultSelect);

  const data = await fetchData(url);
  const pokemonList = data.pokemon_species.map((pokemon) => {
    const optionElement = document.createElement('option');
    optionElement.value = pokemon.name;
    optionElement.textContent = pokemon.name;
    return optionElement;
  });
  pokemonSelect.append(...pokemonList);
}

async function fetchImage(pokemonName) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  const data = await fetchData(url);
  const image = data.sprites.front_default;
  const imageElement = document.getElementById('pokemon-sprite');
  imageElement.src = image;
}

function main() {
  //Load list with pokemon when clicked
  const getPokemonButton = document.getElementById('getPokemon');
  getPokemonButton.onclick = () => {
    const pokemonGeneration = 1;

    if (pokemonGeneration) {
      fetchAndPopulatePokemons(pokemonGeneration);
    }
  };

  const pokemonSelect = document.getElementById('pokemon');
  pokemonSelect.onchange = () => {
    const pokemonName = pokemonSelect.value;

    if (pokemonName) {
      fetchImage(pokemonName);
    }
  };
}

window.addEventListener('load', main);
