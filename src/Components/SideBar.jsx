import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helper/helper";

import styles from "./SideBar.module.css";
import { categories } from "../constants/list";
function SideBar({ setQuery, query }) {
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        {categories.map((item) => {
          return (
            <li
              key={item.id}
              className={
                query.category === item.type.toLowerCase()
                  ? styles.selected
                  : null
              }
            >
              {item.type}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBar;
