import { useContext, useEffect } from "react";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";

import { ItemCart } from "../ItemCart/ItemCart";

import { CartShopContext } from "../../context/CartContext";

import styles from "./Cart.module.css";

export const Cart = ({}) => {
  const { open, setOpen, cart, storage, setCart } = useContext(CartShopContext);

  useEffect(() => {
    if (storage) {
      setCart(storage);
    }
  }, [open]);

  return (
    <div className={styles.mainCart}>
      <div className={styles.btnContainer}>
        <div className={styles.btnCart} onClick={() => setOpen(!open)}>
          {!open ? (
            <>
              <p className={styles.amountCart}>{cart.length}</p>
              <AiOutlineShoppingCart className={styles.icon} width={100} />
            </>
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
