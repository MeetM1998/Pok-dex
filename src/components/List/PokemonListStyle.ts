
import styled from "styled-components";

export const PokemonListContainer = styled.div`
  padding: 40px 20px;
  background-color: #f7f7f7;
  min-height: 90vh;
  text-align: center;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

export const Header = styled.h1`
  font-size: 3rem;
  color: #ff1c1c;
  margin-bottom: 20px;
`;

export const PokemonList = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr); 
  gap: 25px;
  padding: 0 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr); 
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;


export const LoadingText = styled.p`
  font-size: 1.2rem;
  color: #888;
`;

export const ErrorText = styled.p`
  font-size: 1.2rem;
  color: #e60000;
`;

export const NoDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NoDataText = styled.p`
  font-size: 1.5rem;
  color: #555;
  margin-top: 30px;
  font-weight: bold;
  background-color: #ffe5e5;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 50%;
`;

export const PokemonCard = styled.div`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
  }

  .type {
    display: inline-block;
    padding: 5px 10px;
    border-radius: 20px;
    color: #fff;
    margin: 5px 3px;
    font-size: 0.8rem;
    text-transform: capitalize;
  }

  .grass {
    background-color: #78c850;
  }

  .fire {
    background-color: #f08030;
  }

  .water {
    background-color: #6890f0;
  }

  .electric {
    background-color: #f8d030;
  }

  .poison {
    background-color: #a040a0;
  }

  .ground {
    background-color: #e0c068;
  }

  .flying {
    background-color: #a890f0;
  }

  .bug {
    background-color: #a8b820;
  }

  .normal {
    background-color: #a8a878;
  }

  .fighting {
    background-color: #c03028;
  }

  .psychic {
    background-color: #f85888;
  }

  .rock {
    background-color: #b8a038;
  }

  .ghost {
    background-color: #705898;
  }

  .ice {
    background-color: #98d8d8;
  }

  .dragon {
    background-color: #7038f8;
  }

  .fairy {
    background-color: #ee99ac;
  }

  .dark {
    background-color: #705848;
  }

  .steel {
    background-color: #b8b8d0;
  }
`;

export const PokemonImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin-bottom: 15px;
`;

export const PokemonName = styled.h2`
  font-size: 1.5rem;
  color: #333;
  text-transform: capitalize;
  margin-bottom: 10px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  gap: 20px;

  span {
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  padding: 10px 15px;
  width: 300px;
  max-width: 80%;
  border: 2px solid #ddd;
  border-radius: 30px;
  font-size: 1rem;
  outline: none;
  transition: border 0.3s;

  &:focus {
    border-color: #ff1c1c;
  }
`;

