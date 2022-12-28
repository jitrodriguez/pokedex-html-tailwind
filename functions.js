const searchPokemon = async function (id_or_name) {
  let name = null;
  if (id_or_name) {
    name = id_or_name;
  } else {
    const input = document.getElementById('search-input');
    name = input.value;
  }
  const pokemon = await getPokemon(name);
  if (pokemon) {
    displayImage(pokemon.sprite_front);
    changeName(pokemon.name);
    turnOnLight('normal');
  } else {
    alert('Pokemon not found!');
  }
  return pokemon;
};

const displayImage = function (url) {
  const img = document.getElementById('pokemon-img');
  img.src = url;
};

const turnOnLight = function (light) {
  const lightNormal = document.getElementById('normal-light');
  const lightShiny = document.getElementById('shiny-light');
  switch (light) {
    case 'normal':
      lightNormal.classList.add('bg-yellow-ligth');
      lightNormal.classList.remove('bg-black');
      lightShiny.classList.add('bg-black');
      lightShiny.classList.remove('bg-yellow-ligth');
      break;
    case 'shiny':
      lightNormal.classList.remove('bg-yellow-ligth');
      lightNormal.classList.add('bg-black');
      lightShiny.classList.remove('bg-black');
      lightShiny.classList.add('bg-yellow-ligth');
      break;
    default:
      break;
  }
};

const changeName = function (name) {
  const pokemonName = document.getElementById('pokemon-name');
  pokemonName.innerText = name;
  clearInput();
};
const clearInput = function () {
  const input = document.getElementById('search-input');
  input.value = '';
};
const nextPokemon = async function (currentPokemon) {
  return await searchPokemon(currentPokemon.next);
};
