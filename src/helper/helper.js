const shortenText = (text) => {
  return text.split(" ").slice(0, 3).join(" ");
};

const searchProduct = (products, search) => {
  if (!search) return products;
  const searchedProduct = products.filter((product) => {
    return product.title.toLowerCase().includes(search);
  });

  return searchedProduct;
};

const filterProduct = (products, category) => {
  if (!category) return products;
  const filteredProduct = products.filter(
    (product) => product.category === category
  );
  return filteredProduct;
};

const createQueryObject = (currentQuery, newQuerry) => {
  if (newQuerry.category === "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }
  if (newQuerry.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  return { ...currentQuery, ...newQuerry };
};
export { shortenText, searchProduct, filterProduct, createQueryObject };
