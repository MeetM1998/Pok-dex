import styled from "styled-components";

interface PaginationButtonProps {
    active: boolean;
}

export const PaginationContainer = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const PaginationButton = styled.button<PaginationButtonProps>`
  padding: 10px 20px;
  background-color: ${({ active }) => (active ? "#ff1c1c" : "#eee")};
  color: ${({ active }) => (active ? "#fff" : "#333")};
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, transform 0.2s;
  outline: none;

  &:hover {
    background-color: ${({ active }) => (active ? "#e60000" : "#ddd")};
    transform: scale(1.1);
  }
`;
