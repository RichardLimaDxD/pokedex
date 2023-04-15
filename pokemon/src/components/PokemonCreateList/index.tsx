/* eslint-disable @next/next/no-img-element */
import { IPokemonPropsCard } from "@/services/@types";
import Link from "next/link";

function PokemonCreateList({ pokemon }: IPokemonPropsCard) {
  return (
    <>
      <h2>{pokemon.name}</h2>
      <img
        src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
        alt={pokemon.name}
        width={220}
        height={220}
      />
    </>
  );
}

export default PokemonCreateList;
