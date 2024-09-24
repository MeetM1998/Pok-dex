import styled from "styled-components";
import { Link } from "react-router-dom";

export const PokemonDetailContainer = styled.div`
  padding: 0 20px;
  background-color: #f7f7f7;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

export const PokemonDetailCard = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  max-width: 750px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 50px;

  @media (max-width: 1024px) {
    gap: 50px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    max-width: 400px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 20px;
    max-width: 300px;
  }
`;

export const PokemonDetailLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 480px) {
    text-align: center;
  }
`;

export const PokemonDetailRight = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const PokemonImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`;

export const PokemonName = styled.h2`
  font-size: 2.5rem;
  text-transform: capitalize;
  color: #333;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const PokemonTypes = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;

  .type {
    padding: 10px 20px;
    border-radius: 20px;
    color: white;
    font-size: 1rem;
    text-transform: capitalize;
  }

  @media (max-width: 768px) {
    .type {
      padding: 8px 15px;
    }
  }

  @media (max-width: 480px) {
    .type {
      padding: 6px 10px;
      font-size: 0.9rem;
    }
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

export const PokemonStats = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 15px;
  width: 100%;
  max-width: 90%;

  h3 {
    margin-bottom: 15px;
    font-size: 1.5rem;
    color: #444;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    font-size: 1.2rem;
    color: #666;
    padding: 8px 0;
    border-bottom: 1px solid #ddd;

    &:last-child {
      border-bottom: none;
    }
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.4rem;
    }

    li {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 480px) {
    max-width: 265px;
    h3 {
      font-size: 1.2rem;
    }

    li {
      font-size: 1rem;
      padding: 6px 0;
    }
  }
`;

export const BackLink = styled(Link)`
  margin-top: 20px;
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  border: 1px solid red;
  padding: 15px 20px;
  border-radius: 30px;
  transition: color 0.3s;
  background-color: red;

  &:hover {
    color: #d3d3d3;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const LoadingText = styled.p`
  font-size: 1.2rem;
  color: #888;
  text-align: center;
`;

export const ErrorText = styled.p`
  font-size: 1.2rem;
  color: #e60000;
  text-align: center;
`;
