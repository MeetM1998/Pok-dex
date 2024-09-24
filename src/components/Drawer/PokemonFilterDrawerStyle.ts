import styled from "styled-components";

export const FilterDrawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 250px;
  background-color: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  padding: 20px;
  overflow: hidden;
  transition: transform 0.4s ease-in-out;
`;

export const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SeletedTypeNumber = styled.p`
  font-size: 1rem;
  text-align: left;
  text-transform: capitalize;
`;

export const FilterText = styled.h3`
  margin-bottom: 20px;
  font-size: 1.2rem;
`;

export const CloseIcon = styled.div`
  cursor: pointer;
`;

export const PokemonListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 15px;
  max-height: 80vh;
  overflow: auto;
  scrollbar-width: none;
`;

export const Dropdown = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const TypeItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 8px;
  transition: background-color 0.2s ease;
  cursor: pointer;
  overflow: auto;

  &:hover {
    background-color: #e2e2e2;
  }

  label {
    text-transform: capitalize;
    font-weight: bold;
    color: #333;
    cursor: pointer;
  }
`;

export const CustomCheckbox = styled.input`
  accent-color: #f27a1a;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const SelectedTypesContainer = styled.div`
  text-align: center;
  margin-top: 20px;

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 5px 0;
  }
`;
