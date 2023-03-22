// import PokemonTable from "@/components/PokemonTable";
import SearchInput from "@/components/SearchInput";
import Providers from "@/components/Provider";
import PreloadComponent from "@/components/PreloadComponent";
import SSRPokemonTable from "@/components/SSRPokemonTable";

import { store } from "@/store";
import { setStartupPokemon } from "../store/searchSlice"; 

export default async function Home() {
  const request = await fetch("http://localhost:3000/api/search");
  const data = await request.json();
  store.dispatch(setStartupPokemon(data));

  return(
    <main>
     {/* <PokemonTable pokemons={data} /> */}
     < PreloadComponent pokemons={data} />
     <Providers>
     <SearchInput />
     </Providers>
    </main>
  )
}
// {JSON.stringify(data)}