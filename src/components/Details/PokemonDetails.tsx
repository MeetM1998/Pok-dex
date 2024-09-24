/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import * as S from "./PokemonDetailsStyle";
import { useParams } from "react-router-dom";
import axios from "axios";
import { PokemonDetailsData } from "../../types";

const PokemonDetails: React.FC = () => {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState<PokemonDetailsData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`,
          {
            validateStatus: () => true,
          }
        );

        if (response.status >= 400) {
          setError("Failed to fetch Pokémon details.");
          setLoading(false);
          return;
        }

        setPokemon(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch Pokémon details.");
        setLoading(false);
      }
    };

    fetchPokemonDetail();
  }, [name]);

  if (loading) {
    return <S.LoadingText>Loading...</S.LoadingText>;
  }

  if (error) {
    return <S.ErrorText>{error}</S.ErrorText>;
  }

  return (
    <S.PokemonDetailContainer>
      {pokemon && (
        <S.PokemonDetailCard>
          <S.PokemonDetailLeft>
            <S.PokemonImage
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
            />
            <S.PokemonName>{pokemon.name}</S.PokemonName>
            <S.PokemonTypes>
              {pokemon?.types.map((type) => {
                return (
                  <span
                    key={type?.type?.name}
                    className={`type ${type?.type?.name}`}
                  >
                    {type?.type?.name}
                  </span>
                );
              })}
            </S.PokemonTypes>
          </S.PokemonDetailLeft>
          <S.PokemonDetailRight>
            <S.PokemonStats>
              <h3>Stats</h3>
              <ul>
                {pokemon?.stats.map((stat) => (
                  <li key={stat.stat.name}>
                    {stat.stat.name}: {stat.base_stat}
                  </li>
                ))}
              </ul>
            </S.PokemonStats>
          </S.PokemonDetailRight>
        </S.PokemonDetailCard>
      )}
      <S.BackLink to="/">Back to Pokédex</S.BackLink>
    </S.PokemonDetailContainer>
  );
};
export default PokemonDetails;
