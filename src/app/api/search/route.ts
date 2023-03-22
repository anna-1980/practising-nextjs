import { NextResponse } from "next/server";

import pokemon from "@/pokemon.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");
  const pokemonData = pokemon.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(name?.toLocaleLowerCase() ?? "")
  );
  return NextResponse.json(pokemonData.slice(0,10));
}
