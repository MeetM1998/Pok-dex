import React, { useEffect, useState } from "react";
import { PokemonFilterDrawerProps } from "../../types";
import { pokemonTypesList } from "../../utils/constant";
import * as S from "./PokemonFilterDrawerStyle";

const PokemonFilterDrawer: React.FC<PokemonFilterDrawerProps> = ({
  openFilter,
  setOpenFilter,
  selectedTypes,
  setSelectedTypes,
}) => {
  const [filteredTypes, setFilteredTypes] =
    useState<string[]>(pokemonTypesList);

  useEffect(() => {
    if (openFilter) {
      setFilteredTypes(pokemonTypesList);
    }
  }, [openFilter]);

  const handleCheckboxChange = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  return (
    <S.FilterDrawer>
      <S.DrawerHeader>
        <S.FilterText>Filter by Type</S.FilterText>
        <S.CloseIcon onClick={() => setOpenFilter(false)}>
          <span className="material-symbols-outlined">close</span>
        </S.CloseIcon>
      </S.DrawerHeader>

      <S.SeletedTypeNumber>{`${selectedTypes?.length} selected type(s) out of ${pokemonTypesList?.length}`}</S.SeletedTypeNumber>

      <S.PokemonListContainer>
        <S.Dropdown>
          {filteredTypes.map((type) => (
            <S.TypeItem key={type}>
              <S.CustomCheckbox
                type="checkbox"
                id={type}
                name={type}
                value={type}
                checked={selectedTypes.includes(type)}
                onChange={() => handleCheckboxChange(type)}
              />
              <label htmlFor={type}>{type}</label>
            </S.TypeItem>
          ))}
        </S.Dropdown>
      </S.PokemonListContainer>
    </S.FilterDrawer>
  );
};

export default PokemonFilterDrawer;
