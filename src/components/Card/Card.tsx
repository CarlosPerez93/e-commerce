import product from "./card.type";

import styles from "./Card.module.css";

export const Card = (data: product) => {
  return (
    <div className={styles.main}>
      <img src={data.image} alt="imagen product" className={styles.img} />
      <h3 className={styles.h3}>{data.title}</h3>
      <p className={styles.p}>
        <strong>price $</strong>
        {data.price}
      </p>
    </div>
  );
};

export default Card;
