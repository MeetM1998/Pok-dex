interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonAPIResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

interface PokemonType {
  type: {
    name: string;
  };
}

export interface PokemonDetails {
  id: number;
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: PokemonType[];
}

export interface PokemonData {
  id: number;
  name: string;
  imageUrl: string;
  types: string[];
}

export interface PaginationProps {
  filteredPokemon: PokemonData[];
  onPageChange: (currentPokemon: PokemonData[]) => void;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export interface PokemonDetailsData {
  id: number;
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  stats: {
    stat: {
      name: string;
    };
    base_stat: number;
  }[];
  types: {
    type: {
      name: string;
    };
  }[];
  front_default: string;
  "official-artwork": {
    front_default: string;
  };
}

export interface PokemonFilterDrawerProps {
  openFilter: boolean;
  setOpenFilter: (open: boolean) => void;
  selectedTypes: string[];
  setSelectedTypes: (types: string[]) => void;
}

export interface ChipProps {
  selectedTypes: string[];
  setSelectedTypes: (types: string[]) => void;
}
