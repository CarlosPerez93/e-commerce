import { useContext, useState } from "react";

import { Card } from "../../components/Card";
import { Select } from "../../components/Select";
import { categoryFilter } from "../../hooks/useFilter";
import { FilterPrice } from "../../components/FilterPrice";

import { CartShopContext } from "../../context/CartContext";

import styles from "./Product.module.css";

export const Product = () => {
  const [key, setKey] = useState("");
  const [filter, setFilter] = useState("");

  const { data, addToCart } = useContext(CartShopContext);

  const handleFilter = (e: any, key: string) => {
    setFilter(e.target.value);
    setKey(key);
  };

  if (data.length === 0) return <h1>loading...</h1>;
  return (
    <div className={styles.main}>
      <h1>E-COMMERCE</h1>
      <div className={styles.filters}>
        <Select
          typeFilter="categories"
          data={data}
          filter={filter}
          handleFilter={(e) => handleFilter(e, "categories")}
        />
        <FilterPrice handleFilter={(e) => handleFilter(e, "price")} />
      </div>

      <div className={styles.products}>
        {categoryFilter({ data, stateFilter: filter, key }).map((dat: any) => (
          <Card key={dat.id} product={dat} onClick={() => addToCart(dat)} />
        ))}
      </div>
    </div>
  );
};

export default Product;
