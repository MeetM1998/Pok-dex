/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { PokemonAPIResponse, PokemonData, PokemonDetails } from "../../types";
import Pagination from "../Pagination/Pagination";
import * as S from "./PokemonListStyle";
import { Link } from "react-router-dom";
import PokemonFilterDrawer from "../Drawer/PokemonFilterDrawer";
import Chip from "../chips/Chips";

const PokemonList: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<PokemonData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredPokemon, setFilteredPokemon] = useState<PokemonData[]>([]);
  const [currentPokemon, setCurrentPokemon] = useState<PokemonData[]>([]);
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const filteredData = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const filteredByType = selectedTypes.length
      ? filteredData.filter((pokemon) =>
          pokemon.types.some((type) => selectedTypes.includes(type))
        )
      : filteredData;

    setFilteredPokemon(filteredByType);
    setCurrentPage(1);
  }, [searchTerm, pokemonList, selectedTypes]);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get<PokemonAPIResponse>(
          "https://pokeapi.co/api/v2/pokemon?limit=100"
        );

        if (!response?.data?.results) {
          setError("Failed to fetch Pokémon data.");
          setLoading(false);
          return;
        }

        const newPokemonList = await Promise.all(
          response.data.results.map(async (pokemon) => {
            const details = await axios.get<PokemonDetails>(pokemon?.url);
            return details?.data;
          })
        );

        const pokemonData: PokemonData[] = newPokemonList?.map((pokemon) => ({
          id: pokemon?.id,
          name: pokemon?.name,
          imageUrl:
            pokemon?.sprites?.other?.["official-artwork"]?.front_default,
          types: pokemon?.types?.map((type) => type?.type?.name),
        }));

        setPokemonList(pokemonData);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch Pokémon data.");
        setLoading(false);
      }
    };
    fetchPokemon();
  }, []);

  useEffect(() => {
    const filterData = pokemonList?.filter((pokemon) =>
      pokemon?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    );
    setFilteredPokemon(filterData ?? []);
  }, [searchTerm, pokemonList]);

  const handlePageChange = (currentPokemon: PokemonData[]) => {
    setCurrentPokemon(currentPokemon);
  };

  return (
    <S.PokemonListContainer>
      <S.Header>Pokédex</S.Header>
      <S.SearchContainer>
        <S.SearchInput
          type="text"
          placeholder="Search Pokémon"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        <span
          className="material-symbols-outlined"
          onClick={() => setOpenFilter(!openFilter)}
        >
          menu
        </span>
      </S.SearchContainer>

      <Chip selectedTypes={selectedTypes} setSelectedTypes={setSelectedTypes} />

      {openFilter && (
        <PokemonFilterDrawer
          openFilter={openFilter}
          setOpenFilter={setOpenFilter}
          selectedTypes={selectedTypes}
          setSelectedTypes={setSelectedTypes}
        />
      )}
      {loading && <S.LoadingText>Loading...</S.LoadingText>}
      {error && <S.ErrorText>{error}</S.ErrorText>}
      {!loading && !error && filteredPokemon?.length === 0 && (
        <S.NoDataContainer>
          <S.NoDataText>No Pokémon found!!!</S.NoDataText>
        </S.NoDataContainer>
      )}

      <S.PokemonList>
        {!loading &&
          !error &&
          currentPokemon?.map((pokemon) => {
            if (!pokemon) return null;
            return (
              <Link to={`/details/${pokemon?.name}`} key={pokemon?.id}>
                <S.PokemonCard key={pokemon?.id}>
                  <S.PokemonImage src={pokemon?.imageUrl} alt={pokemon?.name} />
                  <S.PokemonName>{pokemon?.name}</S.PokemonName>
                  <div>
                    {pokemon?.types?.map((type: string) => (
                      <span key={type} className={`type ${type}`}>
                        {type}
                      </span>
                    ))}
                  </div>
                </S.PokemonCard>
              </Link>
            );
          })}
      </S.PokemonList>

      <Pagination
        filteredPokemon={filteredPokemon ?? []}
        onPageChange={handlePageChange}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </S.PokemonListContainer>
  );
};

export default PokemonList;
