import { PropsWithChildren, createContext, useEffect, useState } from "react";

import { Product } from "../common/api.type";
import { getData } from "../functions/getData";
import { CartValue } from "./cartContext.type";

export const CartShopContext = createContext({} as CartValue);

export const CartProvider = ({ children }: PropsWithChildren<{}>) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [data, setData] = useState<Product[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [storage, setStorage] = useState<Product[]>([]);

  useEffect(() => {
    getData(setData, "/products");
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    setStorage(JSON.parse(localStorage.getItem("cart")!));
  }, [cart]);

  const addToCart = (product: Product) => {
    const inCart = cart.find(
      (productInCart) => productInCart.id === product.id
    );

    if (inCart) {
      setCart(
        cart.map((item) => {
          if (item.id === product.id) {
            return { ...inCart, amount: item.amount! + 1 };
          } else return item;
        })
      );
    } else setCart([...cart, { ...product, amount: 1 }]);
  };

  const delToCart = (product: Product) => {
    const inCart = cart.find(
      (productInCart) => productInCart.id === product.id
    );

    if (inCart?.amount === 1) {
      setCart(cart.filter((productInCart) => productInCart.id !== product.id));
      localStorage.removeItem("cart");
    } else {
      setCart(
        cart.map((productInCart) => {
          if (productInCart.id === product.id) {
            return { ...inCart!, amount: inCart?.amount! - 1 };
          } else return productInCart;
        })
      );
    }
  };
  return (
    <CartShopContext.Provider
      value={{
        cart,
        data,
        open,
        storage,
        addToCart,
        delToCart,
        setOpen,
        setCart,
      }}
    >
      {children}
    </CartShopContext.Provider>
  );
};
