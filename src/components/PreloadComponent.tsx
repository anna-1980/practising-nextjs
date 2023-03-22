// this is a preloader, you have to bring it to the page in orger to sync store between server and client component
"use client"
import { useRef} from "react";
import {store} from "@/store";
import { setStartupPokemon } from "@/store/searchSlice";
import { Pokemon } from "@/types";

function PreloadComponent( { pokemons }: { pokemons: Pokemon[] }) {
  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(setStartupPokemon(pokemons));
    loaded.current = true;
   
  }
  return null;
}

export default PreloadComponent;