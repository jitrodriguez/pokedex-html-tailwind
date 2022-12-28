var pokemon = null;
document
  .getElementById('search-button')
  .addEventListener('click', async function () {
    pokemon = await searchPokemon();
  });

document
  .getElementById('normal-button')
  .addEventListener('click', async function () {
    if (pokemon) {
      displayImage(pokemon.sprite_front);
      turnOnLight('normal');
    }
  });

document
  .getElementById('shiny-button')
  .addEventListener('click', async function () {
    if (pokemon) {
      displayImage(pokemon.front_shiny);
      turnOnLight('shiny');
    }
  });

document
  .getElementById('next-button')
  .addEventListener('click', async function () {
    if (pokemon) {
      pokemon = await nextPokemon(pokemon);
    }
  });

async function firstRun() {
  pokemon = await searchPokemon(1);
}
firstRun();

document.getElementById('start-button').addEventListener('click', function () {
  document.getElementById('front-container-start').classList.add('hidden');
  document.getElementById('front-container-content').classList.remove('hidden');
  document.getElementById('back-container').classList.remove('hidden');
});
