import { useEffect, useState } from "react";
import { useProduct } from "../context/ProductsContext";
import { useSearchParams } from "react-router-dom";

import Card from "../Components/Card";
import styles from "./ProductsPage.module.css";
import Loader from "../Components/Loader";
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";
import {
  createQueryObject,
  filterProduct,
  searchProduct,
} from "../helper/helper";
function ProductsPage() {
  const products = useProduct();

  const [displayed, setDisplayed] = useState([]);

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setDisplayed(products);
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    let finalProducts = searchProduct(products, query.search);
    finalProducts = filterProduct(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase().trim())}
        />
        <button onClick={searchHandler}>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <div>
          <div>
            <FaListUl />
            <p>Categories</p>
          </div>
          <ul onClick={categoryHandler}>
            <li>All</li>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Men's Clothing</li>
            <li>Women's Clothing</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
