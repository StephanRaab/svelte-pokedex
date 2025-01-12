import type { PageLoad } from "./$types";

type ApiMonster = {
  name: string;
  url: string;
  id: number;
};

export type IndexMonster = ApiMonster & {
  //the & here is extending the ApiMonster
  id: string;
  image: string;
};

export const load = (async ({ fetch }) => {
  // this is for SSR

  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const json = await res.json();
  const monsters: IndexMonster[] = json.results.map((monster: ApiMonster) => {
    const splitUrl = monster.url.split("/");
    const id = splitUrl[splitUrl.length - 2];

    return {
      name: monster.name,
      url: monster.url,
      id,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    };
  });

  return {
    monsters,
  };
}) satisfies PageLoad;
