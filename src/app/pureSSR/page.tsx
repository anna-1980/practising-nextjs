// import PokemonTable from "@/components/PokemonTable";
import SSRPokemonTable from "@/components/SSRPokemonTable";

import { store } from "@/store";
import { setStartupPokemon } from "../../store/searchSlice"; 

export default async function Home() {
  const request = await fetch("http://localhost:3000/api/search");
  const data = await request.json();
  store.dispatch(setStartupPokemon(data));
  
  return(
    <main>
     < SSRPokemonTable   />
    </main>
  )
}