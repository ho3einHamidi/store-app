import { TailSpin } from "react-loader-spinner";
import styles from "./Loader.module.css";
function Loader() {
  return (
    <div className={styles.loader}>
      <TailSpin color="#fe5d42" />
    </div>
  );
}

export default Loader;
