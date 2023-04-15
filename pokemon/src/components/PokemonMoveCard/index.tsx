import { IPokemonStatsCard } from "@/services/@types";

export const PokemonStatsCard = ({ stat }: IPokemonStatsCard) => {
  return (
    <li className="container__pokemonStatsCard">
      <h2>{stat.stat.name}</h2>
      <p>{stat.base_stat}</p>
      <span>{stat.offort}</span>
    </li>
  );
};
