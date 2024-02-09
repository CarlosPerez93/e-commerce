import { useEffect, useState } from "react";

import { Card } from "../../components/Card";
import { Select } from "../../components/Select";
import { categoryFilter } from "../../hooks/useFilter";
import { FilterPrice } from "../../components/FilterPrice";

import { getData } from "../../functions/getData";

import styles from "./Product.module.css";

export const Product = () => {
  const [key, setKey] = useState("");
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getData(setData, "/products");
  }, []);

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
          <Card
            key={dat.id}
            image={dat?.image}
            price={dat?.price}
            title={dat?.title}
            description={dat.description}
            category={dat.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
