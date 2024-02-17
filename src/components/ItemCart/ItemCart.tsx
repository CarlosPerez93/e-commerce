import { FC, useContext } from "react";

import CustomButton from "../CustomButton/CustomButton";

import card from "../Card/card.type";
import { CartShopContext } from "../../context/CartContext";

import styles from "./ItemCart.module.css";

export const ItemCart: FC<card> = ({ product }) => {
  const { addToCart, delToCart } = useContext(CartShopContext);

  const { image, price, title, amount } = product;
  return (
    <div className={styles.mainItemCart}>
      <p className={styles.title}>{title}</p>
      <div className={styles.checked}>
        <img src={image} alt={title} />
        <div className={styles.btn}>
          <CustomButton
            margin="auto"
            backGroundColor="gray"
            borderRadius=".5rem"
            onClick={() => delToCart(product)}
            text="-"
          />
          <p>{amount}</p>
          <CustomButton
            margin="auto"
            backGroundColor="gray"
            borderRadius=".5rem"
            onClick={() => addToCart(product)}
            text="+"
          />
        </div>
        <p>Total: ${amount! * price}</p>
      </div>
    </div>
  );
};

export default ItemCart;
