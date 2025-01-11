export const load = async () => {
  // this is for SSR
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const json = await res.json();

  return {
    monsters: json.results,
  };
};
