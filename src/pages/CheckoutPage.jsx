import { TbShoppingBagExclamation } from "react-icons/tb";
import BasketCard from "../Components/BasketCard";
import BasketSidebar from "../Components/BasketSidebar";
import { useCart } from "../context/CartContext";
import styles from "./CheckoutPage.module.css";
import { Link } from "react-router-dom";
function CheckoutPage() {
  const [state, dispatch] = useCart();

  const clickHandler = (type, payload) => dispatch({ type, payload });

  if (!state.itemsCounter) {
    return (
      <div className={styles.emptybasket}>
        <TbShoppingBagExclamation />
        <p>Your shopping cart is empty</p>
        <Link to="/products">Go to shop</Link>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <BasketSidebar state={state} clickHandler={clickHandler} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
