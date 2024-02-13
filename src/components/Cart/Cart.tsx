import { useContext } from "react";
import { CartShopContext } from "../../context/CartContext";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";

import styles from "./Cart.module.css";
import { ItemCart } from "../ItemCart/ItemCart";
export const Cart = ({}) => {
  const { open, setOpen, cart } = useContext(CartShopContext);

  return (
    <div className={styles.mainCart}>
      <div className={styles.btnContainer}>
        <div className={styles.btnCart} onClick={() => setOpen(!open)}>
          {!open ? (
            <AiOutlineShoppingCart className={styles.icon} width={100} />
          ) : (
            <AiOutlineClose className={styles.icon} />
          )}
        </div>
      </div>
      {cart && open && (
        <div>
          <h2>Cart</h2>
          {cart.length === 0 ? (
            <p>Empty {cart.length} </p>
          ) : (
            cart.map((item) => <ItemCart key={item.id} product={item} />)
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
