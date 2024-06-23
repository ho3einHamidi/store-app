import { useEffect, useState } from "react";
import { useProduct } from "../context/ProductsContext";
import { useSearchParams } from "react-router-dom";

import Card from "../Components/Card";
import styles from "./ProductsPage.module.css";
import Loader from "../Components/Loader";
import {
  filterProduct,
  getInitialQuery,
  searchProduct,
} from "../helper/helper";
import SearchBox from "../Components/SearchBox";
import SideBar from "../Components/SideBar";

function ProductsPage() {
  const products = useProduct();

  const [displayed, setDisplayed] = useState([]);

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setDisplayed(products);

    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProduct(products, query.search);
    finalProducts = filterProduct(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setQuery={setQuery} setSearch={setSearch} />
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <SideBar setQuery={setQuery} query={query} />
      </div>
    </>
  );
}

export default ProductsPage;
