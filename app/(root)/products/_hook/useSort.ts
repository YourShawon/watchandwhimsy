import React from "react";

function useSort() {
  const sortByLowToHighPrice = (a: { price: number }, b: { price: number }) =>
    a.price - b.price;
  const sortByHighToLowPrice = (a: { price: number }, b: { price: number }) =>
    b.price - a.price;
  const sortByReleaseDate = (
    a: { releaseDate: string },
    b: { releaseDate: string }
  ) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
  const sortByRating = (a: { rating: number }, b: { rating: number }) =>
    b.rating - a.rating;

  return {
    sortByLowToHighPrice,
    sortByHighToLowPrice,
    sortByReleaseDate,
    sortByRating,
  };
}

export default useSort;
