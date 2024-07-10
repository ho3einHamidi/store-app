import Loader from "../Components/Loader";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import styles from "./DetailsPage.module.css";
import { useProductDetails } from "../context/ProductsContext";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
function DetailsPage() {
  const { id } = useParams();
  const productDetalis = useProductDetails(+id);
  if (!productDetalis) return <Loader />;
  console.log(productDetalis);
  return (
    <div className={styles.container}>
      <img src={productDetalis.image} alt={productDetalis.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{productDetalis.title}</h3>
        <p className={styles.description}>{productDetalis.description}</p>
        <p className={styles.category}>
          <SiOpenproject />
          {productDetalis.category}
        </p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag />
            {productDetalis.price} $
          </span>
          <Link to="/products">
            <span>
              <FaArrowLeft />
            </span>
            <span>Back To Shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
