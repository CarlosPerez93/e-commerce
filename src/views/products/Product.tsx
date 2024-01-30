import { useEffect, useState } from "react";

import Card from "../../components/Card";
import Select from "../../components/Select";

import styles from "./Product.module.css";

export const Product = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data: any) => {
        setData(data);
      });
  }, []);

  const handleFilter = (e: any) => {
    setFilter(e.target.value);
  };

  if (data.length === 0) return <h1>loading...</h1>;

  return (
    <div className={styles.main}>
      <h1>E-COMMERCE</h1>
      <Select data={data} filter={filter} handleFilter={handleFilter} />
      <div className={styles.products}>
        {data
          .filter((item: any) => {
            return filter.toLowerCase() == ""
              ? item
              : item.category.toLowerCase().includes(filter);
          })
          .map((dat: any) => (
            <Card
              key={dat.id}
              image={dat?.image}
              price={dat?.price}
              title={dat?.title}
            />
          ))}
      </div>
    </div>
  );
};

export default Product;
