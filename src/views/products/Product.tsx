import { useEffect, useState } from "react";

import Card from "../../components/Card";
import Select from "../../components/Select";

import styles from "./Product.module.css";
import Api from "../../common/Api";

export const Product = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await Api({ patch: "get", params: "/products" });
      const json = await data?.json();
      setData(json);
    };
    fetchData();
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
