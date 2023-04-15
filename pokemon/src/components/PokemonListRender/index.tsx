import { IPokemon } from "@/services/@types";
import PokemonCreateList from "../PokemonCreateList";

function PokemonListRender({ searchPokemon }: any) {
  return (
    <section>
      <ul className="container__renderPokemonList">
        {searchPokemon.map((pokemon: IPokemon) => (
          <li className="container__createPokemonCard" key={pokemon.name}>
            <PokemonCreateList pokemon={pokemon} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PokemonListRender;
