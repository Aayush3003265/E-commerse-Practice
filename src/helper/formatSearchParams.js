// const getFormattedSearchParams = (searchParams) => {
//   let query = "";
//   Object.entries(searchParams).map((params) => {
//     const [key, value] = params;
//     if (value) query = `${query == "" ? "" : query + "&"}${key}=${value}`;
//   });
//   // const { min, max, sort, brands } = searchParams;
//   // if (min) query = `${query == "" ? "" : query + "&"}min=${min}`;
//   // if (max) query = `${query == "" ? "" : query + "&"}max=${max}`;
//   // if (sort) query = `${query == "" ? "" : query + "&"}sort=${sort}`;
//   return query;
// };

// export default getFormattedSearchParams;

const getFormattedSearchParams = (searchParams) => {
  if (!searchParams || typeof searchParams !== "object") {
    return "";
  }

  let query = "";
  Object.entries(searchParams).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      query += `${query ? "&" : ""}${key}=${value}`;
    }
  });

  return query;
};

export default getFormattedSearchParams;
