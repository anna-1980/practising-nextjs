import PokemonTable from "@/components/PokemonTable";

import { store } from "@/store";
import { setStartupPokemon } from "../store/searchSlice"; 

export default async function Home() {
  const request = await fetch("http://localhost:3000/api/search");
  const data = await request.json();
  return(
    <main>
     <PokemonTable pokemons={data} />
    </main>
  )
}
// {JSON.stringify(data)}