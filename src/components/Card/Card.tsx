import CustomButton from "../CustomButton";

import card from "./card.type";

import styles from "./Card.module.css";

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
        <CustomButton
          backGroundColor="#12eb1231"
          width="100px"
          onClick={onClick}
          text="Add to Cart"
          margin="auto"
          borderRadius=".5rem"
        />
      ) : (
        <CustomButton
          margin="auto"
          backGroundColor="red"
          width="100px"
          text="In cart"
          borderRadius=".5rem"
        />
      )}
    </div>
  );
};

export default Card;
