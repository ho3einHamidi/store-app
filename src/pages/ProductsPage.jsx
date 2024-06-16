import { TailSpin } from "react-loader-spinner";
import Card from "../Components/Card";
import { useProduct } from "../context/ProductsContext";
import styles from "./ProductsPage.module.css";
import Loader from "../Components/Loader";
function ProductsPage() {
  const products = useProduct();

  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <Loader />}
        {products.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
      <div>sidebar</div>
    </div>
  );
}

export default ProductsPage;
