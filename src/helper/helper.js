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

const getInitialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category) {
    query.category = category;
  }
  if (search) {
    query.search = search;
  }
  return query;
};

const sumProducts = (products) => {
  const itemsCounter = products.reduce(
    (counter, product) => counter + product.quantity,
    0
  );
  const total = products
    .reduce((counter, product) => counter + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemsCounter, total };
};
const productQuantity = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return 0;
  } else {
    return state.selectedItems[index].quantity;
  }
};
export {
  shortenText,
  searchProduct,
  filterProduct,
  createQueryObject,
  getInitialQuery,
  sumProducts,
  productQuantity,
};
