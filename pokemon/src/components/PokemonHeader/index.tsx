/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

function PokemonHeader({ setSearch }: any) {
  const [searchValue, setSearchValue] = useState<string>("");
  const submit = (event: React.SyntheticEvent<EventTarget>) => {
    event.preventDefault();
    setSearch(searchValue);
    setSearchValue("");
  };

  return (
    <header className="container__headerPokemon">
      <h2>Pokédex</h2>

      <form onSubmit={submit}>
        <input
          onChange={(event) => setSearchValue(event.target.value)}
          value={searchValue}
          type="text"
          placeholder="Search Pokémon.."
        />
        <button type="submit">
          <BiSearchAlt className="search--button-icon" />
        </button>
      </form>
    </header>
  );
}
export default PokemonHeader;
