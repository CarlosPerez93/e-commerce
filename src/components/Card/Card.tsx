import product from "./card.type";

import styles from "./Card.module.css";

export const Card = ({
  image,
  price,
  title,
  category,
  description,
}: product) => {
  return (
    <div className={styles.main}>
      <img src={image} alt="imagen product" className={styles.img} />
      <h3 className={styles.h3}>{title}</h3>
      <div className={styles.container}>
        <p>Category: {category}</p>
        <p className={styles.description}>Description: {description}</p>
      </div>
      <p className={styles.p}>
        <strong>price $</strong>
        {price}
      </p>
    </div>
  );
};

export default Card;
