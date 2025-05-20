async function fetchPokemon(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!res.ok) return null;
  return await res.json();
}

async function getPokemons() {
  const count = parseInt(document.getElementById('count').value);
  const category = document.getElementById('category').value;
  const cardsContainer = document.getElementById('cards');
  cardsContainer.innerHTML = '';

  let found = 0;
  while (found < count) {
    const id = Math.floor(Math.random() * 1010) + 1;
    const data = await fetchPokemon(id);
    if (!data) continue;

    const types = data.types.map(t => t.type.name);
    if (types.includes(category)) {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h4>${data.name}</h4>
        <img src="${data.sprites.front_default}" alt="${data.name}" />
        <p>Type: ${types.join(', ')}</p>
      `;
      cardsContainer.appendChild(card);
      found++;
    }
  }
}
