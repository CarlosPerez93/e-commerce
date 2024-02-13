import CustomButton from "../CustomButton";
import styles from "./Card.module.css";
import card from "./card.type";

export const Card = ({
  product: { image, price, title, category, description, inCart },
  onClick,
}: card) => {
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
      {!inCart ? (
        <CustomButton onClick={onClick} text="Add to Cart" />
      ) : (
        <CustomButton text="In cart" />
      )}
    </div>
  );
};

export default Card;
