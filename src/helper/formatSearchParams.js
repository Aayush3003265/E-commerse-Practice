import React from "react";

const getFormattedSearchParams = (searchParams) => {
  let query = "";
  const { min, max, sort } = searchParams;
  if (min) query = `${query == "" ? "" : query + "&"}min=${min}`;
  if (max) query = `${query == "" ? "" : query + "&"}max=${max}`;
  if (sort) query = `${query == "" ? "" : query + "&"}sort=${sort}`;
  return query;
};

export default getFormattedSearchParams;
