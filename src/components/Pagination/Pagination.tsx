import React, { useEffect } from "react";
import { PaginationProps } from "../../types";
import * as S from "./PaginationStyle";

const Pagination: React.FC<PaginationProps> = ({
  filteredPokemon,
  onPageChange,
  currentPage,
  setCurrentPage,
}) => {
  const itemPerPage: number = 12;
  const pagesToShow: number = 3;

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentPokemon = filteredPokemon?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredPokemon?.length / itemPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    onPageChange(currentPokemon);
  }, [currentPage, filteredPokemon]);

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  ).slice(
    Math.max(0, currentPage - Math.ceil(pagesToShow / 3)),
    Math.min(totalPages, currentPage + Math.floor(pagesToShow / 2))
  );

  return (
    <S.PaginationContainer>
      {currentPage > 1 && (
        <S.PaginationButton
          active={false}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </S.PaginationButton>
      )}
      {pageNumbers?.map((page: number) => (
        <S.PaginationButton
          key={page}
          onClick={() => handlePageChange(page)}
          active={page === currentPage}
        >
          {page}
        </S.PaginationButton>
      ))}
      {currentPage < totalPages && (
        <S.PaginationButton
          active={false}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </S.PaginationButton>
      )}
    </S.PaginationContainer>
  );
};

export default Pagination;
