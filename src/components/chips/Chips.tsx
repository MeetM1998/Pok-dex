import React from "react";
import * as S from "./ChipsStyle";
import { ChipProps } from "../../types";

const Chip: React.FC<ChipProps> = ({ selectedTypes, setSelectedTypes }) => {
  const removeTypeChip = (typeToRemove: string) => {
    setSelectedTypes(selectedTypes.filter((type) => type !== typeToRemove));
  };
  return (
    <S.ChipsContainer>
      {selectedTypes.map((type: string) => (
        <S.TypeChip key={type}>
          {type}
          <S.CancelIcon onClick={() => removeTypeChip(type)}>
            <span className="material-symbols-outlined">close</span>
          </S.CancelIcon>
        </S.TypeChip>
      ))}
    </S.ChipsContainer>
  );
};

export default Chip;
