import { Product } from "../common/api.type";

export type CartValue = {
  open: boolean;
  cart: Product[];
  data: Product[];
  storage: Product[];
  setOpen: (open: boolean) => void;
  addToCart: (item: Product) => void;
  setCart: (item: any) => void;
  delToCart: (item: Product) => void;
};
