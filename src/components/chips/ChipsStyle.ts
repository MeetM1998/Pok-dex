import styled from "styled-components";

export const ChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const TypeChip = styled.div`
  background-color: #ffebf2;
  color: #ff1c1c;
  padding: 8px 15px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, box-shadow 0.3s;
  text-transform: capitalize;

  &:hover {
    background-color: #ffe5ec;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const CancelIcon = styled.span`
  cursor: pointer;
  color: #ff1c1c;
  font-size: 1rem;
  display: flex;
  align-items: center;

  &:hover {
    color: #e60000;
  }
`;
