import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { Product } from "../common/api.type";
import { getData } from "../functions/getData";

type cartValue = {
  cart: Product[];
  data: Product[];
  open: boolean;
  setOpen: Function;
  addToCart: (item: Product) => void;
  delToCart: (item: Product) => void;
};

export const CartShopContext = createContext({} as cartValue);

export const CartProvider = ({ children }: PropsWithChildren<{}>) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [data, setData] = useState<Product[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    getData(setData, "/products");
    console.log(cart);
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
      value={{ cart, addToCart, delToCart, data, open, setOpen }}
    >
      {children}
    </CartShopContext.Provider>
  );
};
