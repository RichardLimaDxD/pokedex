interface abilities {
  ability: {
    name: string;
    url: string;
  };
  is_hiddlen: boolean;
  slot: number;
}

interface forms {
  name: string;
  url: string;
}

interface gameIndices {
  gameIndex: {
    game_index: string;
  };
  version: {
    name: string;
    url: string;
  };
}

interface species {
  name: string;
  url: string;
}

interface sprites {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

export interface IPokemon {
  name: string;
  id: number;
  url: string;
  front_default: string;
  sprites: { front_default: string };
  ability: Array<abilities>;
  forms: Array<forms>;
  game_indices: Array<gameIndices>;
  species: Array<species>;
  searchPokemon: {
    id: number;
    name: string;
    stats: IStat[];
    sprites: { front_default: string };
  };
  pokemon: {
    id: number;
    name: string;
    stats: IStat[];
    sprites: { front_default: string };
  };
}

export interface IHomeProps {
  pokemonList: IPokemon[];
}

export interface IStat {
  base_stat: number;
  offort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface IPokemonStatsCard {
  stat: IStat;
}

export interface IPokemonPropStats {
  stats: IStat;
}

export interface IPokemonProps {
  pokemon: {
    map: any;
    id: number;
    name: string;
    stats: IStat[];
    sprites: { front_default: string };
    types: {
      type: {
        name: string;
      };
    };
  };
}

interface IPropsTypes {
  types: {
    type: {
      name: string;
    };
  };
}

export interface Itype {
  types: Itype[];

  name: string;
}

export interface IPokemonPropsCard {
  pokemon: {
    name: string;
  };
}

export interface IPropsStaticProps {
  item: number;
  id: number;
  index: number;
}
