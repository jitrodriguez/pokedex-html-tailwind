const baseURL = 'https://pokeapi.co/api/v2/pokemon';
async function getPokemon(id_or_name) {
  const res = await fetch(`${baseURL}/${id_or_name}`);

  if (res.status === 404) {
    return null;
  }
  const data = await res.json();
  return formatPokemonResponse(data);
}

function formatPokemonResponse(data) {
  const { name, id, sprites } = data;
  let next = null;
  let previous = null;
  if (data.id < 905) {
    next = (+id + 1).toString();
  }
  if (data.id > 0) {
    previous = (+id - 1).toString();
  }
  return {
    name,
    id,
    sprite_front: sprites.front_default,
    front_shiny: sprites.front_shiny,
    next,
    previous,
  };
}
